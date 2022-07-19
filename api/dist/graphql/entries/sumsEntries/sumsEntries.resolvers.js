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
exports.SumsEntryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const sumsEntries_schema_1 = require("../sumsEntries/sumsEntries.schema");
let SumsEntryResolver = class SumsEntryResolver {
    async getSumsEntry(id, ctx) {
        const result = await ctx.prisma.sumsEntry.findUnique({
            where: {
                id
            }
        });
        return result;
    }
    async getSumsEntries(scorecardId, ctx) {
        const result = await ctx.prisma.sumsEntry.findMany({
            where: {
                scorecardId
            }
        });
        return result;
    }
    async createSumsEntry(newSumsInput, ctx) {
        const result = await ctx.prisma.sumsEntry.create({
            data: newSumsInput
        });
        return result;
    }
    async updateSumsEntry(sumsInput, ctx) {
        const result = await ctx.prisma.sumsEntry.update({
            where: {
                id: sumsInput.id
            },
            data: sumsInput
        });
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => sumsEntries_schema_1.SumsEntry),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SumsEntryResolver.prototype, "getSumsEntry", null);
__decorate([
    (0, type_graphql_1.Query)(() => [sumsEntries_schema_1.SumsEntry]),
    __param(0, (0, type_graphql_1.Arg)("scorecardId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SumsEntryResolver.prototype, "getSumsEntries", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => sumsEntries_schema_1.SumsEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sumsEntries_schema_1.SumsEntryInput, Object]),
    __metadata("design:returntype", Promise)
], SumsEntryResolver.prototype, "createSumsEntry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => sumsEntries_schema_1.SumsEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sumsEntries_schema_1.SumsEntryInput, Object]),
    __metadata("design:returntype", Promise)
], SumsEntryResolver.prototype, "updateSumsEntry", null);
SumsEntryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => sumsEntries_schema_1.SumsEntry)
], SumsEntryResolver);
exports.SumsEntryResolver = SumsEntryResolver;
//# sourceMappingURL=sumsEntries.resolvers.js.map