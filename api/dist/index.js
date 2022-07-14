"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_graphql_1 = require("express-graphql");
const index_js_1 = require("./graphql/schema/index.js");
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const PORT = process.env.SERVER_PORT;
async function main() {
    const app = (0, express_1.default)();
    const builtSchema = await index_js_1.schema;
    app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
        context: { prisma },
        schema: builtSchema
    }));
    app.listen(PORT, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server Running at ${PORT} 🚀`);
    });
}
main();
//# sourceMappingURL=index.js.map