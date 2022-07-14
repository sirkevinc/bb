"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createContext() {
    // tslint:disable-next-line:no-console
    return {
        prisma,
    };
}
exports.createContext = createContext;
//# sourceMappingURL=context.js.map