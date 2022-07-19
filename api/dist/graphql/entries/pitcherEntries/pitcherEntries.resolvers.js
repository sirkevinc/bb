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
exports.PitcherEntryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const pitcherEntries_schema_1 = require("../pitcherEntries/pitcherEntries.schema");
let PitcherEntryResolver = class PitcherEntryResolver {
    async getPitcherEntry(id, ctx) {
        const result = await ctx.prisma.pitcherEntry.findUnique({
            where: {
                id
            }
        });
        return result;
    }
    async getPitchererEntries(scorecardId, ctx) {
        const result = await ctx.prisma.pitcherEntry.findMany({
            where: {
                scorecardId
            }
        });
        return result;
    }
    async createPitcherEntry(newPitcherInput, ctx) {
        const result = await ctx.prisma.pitcherEntry.create({
            data: newPitcherInput
        });
        return result;
    }
    async updatePitcherEntry(pitcherInput, ctx) {
        const result = await ctx.prisma.pitcherEntry.update({
            where: {
                id: pitcherInput.id
            },
            data: pitcherInput
        });
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => pitcherEntries_schema_1.PitcherEntry),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PitcherEntryResolver.prototype, "getPitcherEntry", null);
__decorate([
    (0, type_graphql_1.Query)(() => [pitcherEntries_schema_1.PitcherEntry]),
    __param(0, (0, type_graphql_1.Arg)("scorecardId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PitcherEntryResolver.prototype, "getPitchererEntries", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => pitcherEntries_schema_1.PitcherEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pitcherEntries_schema_1.PitcherEntryInput, Object]),
    __metadata("design:returntype", Promise)
], PitcherEntryResolver.prototype, "createPitcherEntry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => pitcherEntries_schema_1.PitcherEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pitcherEntries_schema_1.PitcherEntryInput, Object]),
    __metadata("design:returntype", Promise)
], PitcherEntryResolver.prototype, "updatePitcherEntry", null);
PitcherEntryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => pitcherEntries_schema_1.PitcherEntry)
], PitcherEntryResolver);
exports.PitcherEntryResolver = PitcherEntryResolver;
//# sourceMappingURL=pitcherEntries.resolvers.js.map