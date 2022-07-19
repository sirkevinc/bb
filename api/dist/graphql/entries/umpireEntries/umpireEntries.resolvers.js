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
exports.UmpireEntryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const umpireEntries_schema_1 = require("../umpireEntries/umpireEntries.schema");
let UmpireEntryResolver = class UmpireEntryResolver {
    async getUmpireEntry(id, ctx) {
        const result = await ctx.prisma.umpireEntry.findUnique({
            where: {
                id
            }
        });
        return result;
    }
    async getCatcherEntries(scorecardId, ctx) {
        const result = await ctx.prisma.umpireEntry.findMany({
            where: {
                scorecardId
            }
        });
        return result;
    }
    async createUmpireEntry(newUmpireInput, ctx) {
        const result = await ctx.prisma.umpireEntry.create({
            data: newUmpireInput
        });
        return result;
    }
    async updateUmpireEntry(newUmpireInput, ctx) {
        const result = await ctx.prisma.umpireEntry.update({
            where: {
                id: newUmpireInput.id
            },
            data: newUmpireInput
        });
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => umpireEntries_schema_1.UmpireEntry),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UmpireEntryResolver.prototype, "getUmpireEntry", null);
__decorate([
    (0, type_graphql_1.Query)(() => [umpireEntries_schema_1.UmpireEntry]),
    __param(0, (0, type_graphql_1.Arg)("scorecardId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UmpireEntryResolver.prototype, "getCatcherEntries", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => umpireEntries_schema_1.UmpireEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [umpireEntries_schema_1.UmpireEntryInput, Object]),
    __metadata("design:returntype", Promise)
], UmpireEntryResolver.prototype, "createUmpireEntry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => umpireEntries_schema_1.UmpireEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [umpireEntries_schema_1.UmpireEntryInput, Object]),
    __metadata("design:returntype", Promise)
], UmpireEntryResolver.prototype, "updateUmpireEntry", null);
UmpireEntryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => umpireEntries_schema_1.UmpireEntry)
], UmpireEntryResolver);
exports.UmpireEntryResolver = UmpireEntryResolver;
//# sourceMappingURL=umpireEntries.resolvers.js.map