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
import { UsersResolver } from "../users/users.resolvers"
import { ProfileResolver } from "../profiles/profiles.resolvers"
import { ScorecardsResolver } from '../scorecards/scorecards.resolvers'
import { BatterEntryResolver } from '../entries/batterEntries/batterEntries.resolvers'
import { OffenseEntryResolver } from "../entries/offenseEntries/offenseEntries.resolvers"
import { PitcherEntryResolver } from "../entries/pitcherEntries/pitcherEntries.resolvers"
import { UmpireEntryResolver } from "../entries/umpireEntries/umpireEntries.resolvers"
import { SumsEntryResolver } from "../entries/sumsEntries/sumsEntries.resolvers"
import "reflect-metadata";


export const schema = buildSchema({
    resolvers: [UsersResolver,
        ProfileResolver,
        ScorecardsResolver,
        BatterEntryResolver,
        OffenseEntryResolver,
        PitcherEntryResolver,
        UmpireEntryResolver,
        SumsEntryResolver
    ],
    emitSchemaFile: true,
})