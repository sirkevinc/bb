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
exports.BatterEntryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const batterEntries_schema_1 = require("../batterEntries/batterEntries.schema");
let BatterEntryResolver = class BatterEntryResolver {
    async getBatterEntry(id, ctx) {
        const result = await ctx.prisma.batterEntry.findUnique({
            where: {
                id
            },
            include: {
                offenseEntries: true
            }
        });
        return result;
    }
    async getBatterEntries(scorecardId, ctx) {
        const result = await ctx.prisma.batterEntry.findMany({
            where: {
                scorecardId
            },
            include: {
                offenseEntries: true
            }
        });
        return result;
    }
    async addBatterEntry(newBatterInput, ctx) {
        const result = await ctx.prisma.batterEntry.create({
            data: newBatterInput
        });
        return result;
    }
    async updateBatterEntry(updatedBatterInput, id, ctx) {
        const result = await ctx.prisma.batterEntry.update({
            where: {
                id
            },
            data: updatedBatterInput
        });
        // tslint:disable-next-line:no-console
        console.log('sldkfjslkdjf', updatedBatterInput);
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => batterEntries_schema_1.BatterEntry),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BatterEntryResolver.prototype, "getBatterEntry", null);
__decorate([
    (0, type_graphql_1.Query)(() => [batterEntries_schema_1.BatterEntry]),
    __param(0, (0, type_graphql_1.Arg)("scorecardId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BatterEntryResolver.prototype, "getBatterEntries", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => batterEntries_schema_1.BatterEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batterEntries_schema_1.BatterEntryInput, Object]),
    __metadata("design:returntype", Promise)
], BatterEntryResolver.prototype, "addBatterEntry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => batterEntries_schema_1.BatterEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Arg)("batterId")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batterEntries_schema_1.BatterEntryInput, Number, Object]),
    __metadata("design:returntype", Promise)
], BatterEntryResolver.prototype, "updateBatterEntry", null);
BatterEntryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => batterEntries_schema_1.BatterEntry)
], BatterEntryResolver);
exports.BatterEntryResolver = BatterEntryResolver;
//# sourceMappingURL=batterEntries.resolvers.js.map