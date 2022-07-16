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
exports.ProfileResolver = void 0;
const type_graphql_1 = require("type-graphql");
const profiles_schema_js_1 = require("./profiles.schema.js");
let ProfileResolver = class ProfileResolver {
    async getProfile(userId, ctx) {
        const result = await ctx.prisma.profile.findUnique({
            where: {
                userId
            },
            include: {
                user: true
            }
        });
        // tslint:disable-next-line:no-console
        console.log(result);
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => profiles_schema_js_1.Profile),
    __param(0, (0, type_graphql_1.Arg)("userId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "getProfile", null);
ProfileResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => profiles_schema_js_1.Profile)
], ProfileResolver);
exports.ProfileResolver = ProfileResolver;
//# sourceMappingURL=profiles.resolvers.js.map