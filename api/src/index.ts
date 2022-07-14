import "reflect-metadata";
import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema/index.js';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();
const PORT = process.env.SERVER_PORT;

async function main() {
    const app = express();
    const builtSchema = await schema;
    app.use('/graphql', graphqlHTTP({
        context: { prisma },
        schema: builtSchema
    }));
    app.listen(PORT, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server Running at ${PORT} 🚀`)
    });

}

main();
