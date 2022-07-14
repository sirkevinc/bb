"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const express_graphql_1 = require("express-graphql");
const schema_1 = require("@graphql-tools/schema");
const dotenv_1 = __importDefault(require("dotenv"));
const index_js_1 = require("../typeDefs/index.js");
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const resolvers = {
    Query: {
        allUsers: () => {
            return prisma.user.findMany();
        }
    }
};
exports.schema = (0, schema_1.makeExecutableSchema)({
    resolvers,
    typeDefs: index_js_1.typeDefs,
});
const app = (0, express_1.default)();
const PORT = process.env.SERVER_PORT;
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: exports.schema,
}));
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server Running at ${PORT} 🚀`);
});
//# sourceMappingURL=index.js.map