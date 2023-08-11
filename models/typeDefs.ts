const typeDefs = `

    type User {
        email: String
        password: String
        twoFactorAuth: Boolean
        secret: String
    }
    
    type UserToken {
        token: String  
        error: String  
    }

    type twoFactorAuth {
        enabled: Boolean
        qrcode: String
    }
    
    type VerifyTwoFactor {
        token: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(email: String, password: String): UserToken
        login(email: String, password: String): UserToken
        updatePassword(oldPassword: String, newPassword: String): UserToken
        enableTwoFactor: twoFactorAuth
        disableTwoFactor: twoFactorAuth
        verifyTwoFactor(code: String, secret: String): VerifyTwoFactor
    }

`;


export default  typeDefs; 