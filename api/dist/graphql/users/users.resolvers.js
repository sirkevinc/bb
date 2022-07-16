"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const type_graphql_1 = require("type-graphql");
const users_schema_1 = require("./users.schema");
let UsersResolver = class UsersResolver {
    async getUsers(ctx) {
        const result = await ctx.prisma.user.findMany();
        return result;
    }
    async getUser(id, ctx) {
        const result = await ctx.prisma.user.findUnique({
            where: {
                id
            }
        });
        return result;
    }
    async addUser(username, email, password, ctx) {
        const result = await ctx.prisma.user.create({
            data: {
                username,
                email,
                password,
            }
        });
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [users_schema_1.User]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
__decorate([
    (0, type_graphql_1.Query)(() => users_schema_1.User),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => users_schema_1.User),
    __param(0, (0, type_graphql_1.Arg)("username")),
    __param(1, (0, type_graphql_1.Arg)("email")),
    __param(2, (0, type_graphql_1.Arg)("password")),
    __param(3, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "addUser", null);
UsersResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => users_schema_1.User)
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolvers.js.map