import { PrismaClient } from '@prisma/client';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

const prisma = new PrismaClient();

const typeDefs = `
    type User {
        email: String!
        username: String!
        password: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

const resolvers = {
    Query: {
        allUsers: () => {
            return prisma.user.findMany();
        }
    }
};

export const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

const app = express();
const PORT = 4000;

app.use('/graphql', graphqlHTTP({
    schema,
}));

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT} 🚀`)
});