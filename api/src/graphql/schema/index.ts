// import { makeExecutableSchema } from "@graphql-tools/schema";
// import { resolvers } from '../resolvers/index.js';

// const typeDefs = `
//     input UserInput {
//         email: String!
//         name: String!
//         password: String!
//         role: Role!
//     }

//     type User {
//         id: Int!
//         email: String!
//         username: String!
//         password: String!
//         role: Role!
//     }

//     type Profile {
//         id: Int!
//         user: User!
//         userId: Int!
//     }

//     enum Role {
//         USER
//         ADMIN
//     }

//     type Query {
//         hello: String!
//         user(id: Int!): User
//         allUsers: [User!]!
//     }

//     type Mutation {
//         createUser(input: UserInput): User
//         updateUser(id: Int!, input: UserInput): User
//     }
// `

// export const schema = makeExecutableSchema({
//     resolvers,
//     typeDefs
// })


import { buildSchema } from "type-graphql"
import { UsersResolver } from "../users/users.resolvers.js"
import { ProfileResolver } from "../profiles/profiles.resolvers.js"
import "reflect-metadata";


export const schema = buildSchema({
    resolvers: [UsersResolver, ProfileResolver],
    emitSchemaFile: true,
})