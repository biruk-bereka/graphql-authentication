
<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 \[Graphql Authentication\] ](#-graphql-authentication-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 [Graphql Authentication] <a name="about-project"></a>

**Graphql Authentication** is a backend project in which it has different endpoints for user registeration, login, update password , enable two factor authentication, and disable two factor authentication. 

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.apollographql.com/docs/apollo-server/">Apollo Server</a></li>
    <li><a href="https://graphql.org/">GraphQL</a></li>
  </ul>
</details>

<details>
  <summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">MonogoDB</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>
1. Implement user registration with data stored in MongoDB.
2. Implement the ability for users to change their password. Users should log in with their email and old password, after which they can change it to a new one.
3. Implement user authentication using JWT (JSON Web Token). Upon successful authentication, the user should receive a token to access protected resources.
4. Implement QR code generation for user two-factor authorization. The QR code should contain the user's secret key and be associated with their account.
5. Add the ability to log in using two-factor authorization. Users must enter their password and a one-time code generated from the QR code to successfully log in.
6. Create a GraphQL API using Apollo Server to perform registration, login, password change, and two-factor authorization operations.
7. Adhere to SOLID principles in the application's design and development.
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
  - Nodejs  
  - MongoDB
### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/biruk-bereka/graphql-authentication.git
```

### Install

Install dependencies: 

```sh
npm i
```

### Usage

To run the project, execute the following command:

```sh
 git checkout feature-authentication 
```

```sh
 npm install 
```

```sh
 npm start 
```

```sh
 Follow the link provided in the terminal 
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Biruk Bereka**

- GitHub: [@biruk-bereka](https://github.com/biruk-bereka)
- LinkedIn:[@Biruk Bereka](https://www.linkedin.com/in/biruk-bereka1212/)

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[Making improvements ]**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give a star!! 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

> Give credit to everyone who inspired your codebase.

I would like to thank my partners. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [LICENSE](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
