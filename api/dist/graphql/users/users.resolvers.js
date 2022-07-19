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
            },
            include: {
                scorecards: true
            }
        });
        return result;
    }
    async addUser(
    // @Arg("username") username: string,
    // @Arg("email") email: string,
    // @Arg("password") password: string,
    newUserInput, ctx) {
        const result = await ctx.prisma.user.create({
            data: newUserInput
        });
        return result;
    }
    async deleteUser(userId, ctx) {
        try {
            const user = await ctx.prisma.user.delete({
                where: {
                    id: userId
                }
            });
            if (user)
                return { message: `${user.username}'s account successfully deleted` };
        }
        catch (_a) {
            return { message: "User deletion failed" };
        }
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
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_schema_1.UserInput, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "addUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => users_schema_1.UserMessage),
    __param(0, (0, type_graphql_1.Arg)("userId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUser", null);
UsersResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => users_schema_1.User)
], UsersResolver);
exports.UsersResolver = UsersResolver;
// Future login?
// @Query((returns) => UserWithToken)
// async login(
//     @Arg("email") email: string,
//     @Arg("password") password: string,
//     @Ctx("ctx") ctx: IContext
// ) : Promise<UserWithToken> {
//     const user = await this.userRepo.findOneUser({ where: { email } });
//     const success = await compare(password, user.password);
//     if (!success) ctx.throw(401);
//     const token = await this.tokenRepo.createToken(user);
//     return {
//         user,
//         token
//     };
// }
//# sourceMappingURL=users.resolvers.js.map