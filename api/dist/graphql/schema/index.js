"use strict";
// import { makeExecutableSchema } from "@graphql-tools/schema";
// import { resolvers } from '../resolvers/index.js';
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
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
const type_graphql_1 = require("type-graphql");
const users_resolvers_js_1 = require("../users/users.resolvers.js");
require("reflect-metadata");
exports.schema = (0, type_graphql_1.buildSchema)({
    resolvers: [users_resolvers_js_1.UsersResolver],
    emitSchemaFile: true,
});
//# sourceMappingURL=index.js.map