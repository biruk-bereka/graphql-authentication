import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import   typeDefs  from '../models/typeDefs';
import resolvers from '../resolvers';
import  mongoose from 'mongoose'; 
import getUser from '../utils/getUser';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = `mongodb+srv://biruk1212:${process.env.DB_PASSWORD}@cluster0.r4srkis.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
    dbName: 'usersdb'
}).then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

interface UserContext {
    id: string,
}

const server = new ApolloServer<UserContext>({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
    context: async ({ req }:{req:any}) => {
    
        let userId = null;
        if(!req.body.query.includes('login') && !req.body.query.includes('addUser')) {
            const token = req.headers.authorization || '';
            if(!token) {
                throw new Error('You must be logged in');
            }
             userId =  await getUser(token); 
        }
        const context: UserContext = {
            id:  userId
        }
        return context;
    },
    listen: { port: 4001 },
});
  
  console.log(`🚀  Server ready at: ${url}`);