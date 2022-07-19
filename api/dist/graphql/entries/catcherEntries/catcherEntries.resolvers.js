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
exports.CatcherEntryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const catcherEntries_schema_1 = require("../catcherEntries/catcherEntries.schema");
let CatcherEntryResolver = class CatcherEntryResolver {
    async getCatcherEntry(id, ctx) {
        const result = await ctx.prisma.catcherEntry.findUnique({
            where: {
                id
            }
        });
        return result;
    }
    async getCatcherEntries(scorecardId, ctx) {
        const result = await ctx.prisma.catcherEntry.findMany({
            where: {
                scorecardId
            }
        });
        return result;
    }
    async createCatcherEntry(newCatcherInput, ctx) {
        const result = await ctx.prisma.catcherEntry.create({
            data: newCatcherInput
        });
        return result;
    }
    async updateCatcherEntry(updatedCatcherInput, ctx) {
        const result = await ctx.prisma.catcherEntry.update({
            where: {
                id: updatedCatcherInput.id
            },
            data: updatedCatcherInput
        });
        // tslint:disable-next-line:no-console
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => catcherEntries_schema_1.CatcherEntry),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CatcherEntryResolver.prototype, "getCatcherEntry", null);
__decorate([
    (0, type_graphql_1.Query)(() => [catcherEntries_schema_1.CatcherEntry]),
    __param(0, (0, type_graphql_1.Arg)("scorecardId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CatcherEntryResolver.prototype, "getCatcherEntries", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => catcherEntries_schema_1.CatcherEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catcherEntries_schema_1.CatcherEntryInput, Object]),
    __metadata("design:returntype", Promise)
], CatcherEntryResolver.prototype, "createCatcherEntry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => catcherEntries_schema_1.CatcherEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catcherEntries_schema_1.CatcherEntryInput, Object]),
    __metadata("design:returntype", Promise)
], CatcherEntryResolver.prototype, "updateCatcherEntry", null);
CatcherEntryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => catcherEntries_schema_1.CatcherEntry)
], CatcherEntryResolver);
exports.CatcherEntryResolver = CatcherEntryResolver;
//# sourceMappingURL=catcherEntries.resolvers.js.map