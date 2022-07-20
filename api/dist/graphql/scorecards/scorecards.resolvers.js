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
exports.ScorecardsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const scorecards_schema_1 = require("./scorecards.schema");
let ScorecardsResolver = class ScorecardsResolver {
    async getScorecards(userId, ctx) {
        const result = await ctx.prisma.scorecard.findMany({
            where: {
                userId
            },
            include: {
                batterEntries: true,
                pitcherEntries: true,
                catcherEntries: true,
                sumsEntries: true,
                umpireEntries: true
            },
            orderBy: {
                date: 'desc'
            }
        });
        return result;
    }
    async getScorecard(id, ctx) {
        const result = await ctx.prisma.scorecard.findUnique({
            where: {
                id
            },
            include: {
                batterEntries: true,
                pitcherEntries: true,
                catcherEntries: true,
                sumsEntries: true,
                umpireEntries: true
            }
        });
        return result;
    }
    async createScorecard(newScorecardInput, ctx) {
        const result = await ctx.prisma.scorecard.create({
            data: newScorecardInput
        });
        return result;
    }
    async updateScorecard(updatedScorecardInput, ctx) {
        const result = await ctx.prisma.scorecard.update({
            where: {
                id: updatedScorecardInput.id
            },
            data: updatedScorecardInput
        });
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [scorecards_schema_1.Scorecard]),
    __param(0, (0, type_graphql_1.Arg)("userId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ScorecardsResolver.prototype, "getScorecards", null);
__decorate([
    (0, type_graphql_1.Query)(() => scorecards_schema_1.Scorecard),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ScorecardsResolver.prototype, "getScorecard", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => scorecards_schema_1.Scorecard),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [scorecards_schema_1.ScorecardInput, Object]),
    __metadata("design:returntype", Promise)
], ScorecardsResolver.prototype, "createScorecard", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => scorecards_schema_1.Scorecard),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [scorecards_schema_1.ScorecardInput, Object]),
    __metadata("design:returntype", Promise)
], ScorecardsResolver.prototype, "updateScorecard", null);
ScorecardsResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => scorecards_schema_1.Scorecard)
], ScorecardsResolver);
exports.ScorecardsResolver = ScorecardsResolver;
//# sourceMappingURL=scorecards.resolvers.js.map