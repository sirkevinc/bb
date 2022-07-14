"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `
    type User {
        email: String!
        username: String!
        password: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;
//# sourceMappingURL=index.js.map