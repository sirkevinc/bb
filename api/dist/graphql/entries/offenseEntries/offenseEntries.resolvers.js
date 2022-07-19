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
exports.OffenseEntryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const offenseEntries_schema_1 = require("../offenseEntries/offenseEntries.schema");
let OffenseEntryResolver = class OffenseEntryResolver {
    async getOffenseEntry(id, ctx) {
        const result = await ctx.prisma.offenseEntry.findUnique({
            where: {
                id
            }
        });
        return result;
    }
    async getOffenseEntries(batterId, ctx) {
        const result = await ctx.prisma.offenseEntry.findMany({
            where: {
                batterId
            }
        });
        return result;
    }
    async createOffenseEntry(newOffenseInput, ctx) {
        const result = await ctx.prisma.offenseEntry.create({
            data: newOffenseInput
        });
        return result;
    }
    async updateOffenseEntry(updatedOffenseInput, ctx) {
        const result = await ctx.prisma.offenseEntry.update({
            where: {
                id: updatedOffenseInput.id
            },
            data: updatedOffenseInput
        });
        // tslint:disable-next-line:no-console
        return result;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => offenseEntries_schema_1.OffenseEntry),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], OffenseEntryResolver.prototype, "getOffenseEntry", null);
__decorate([
    (0, type_graphql_1.Query)(() => [offenseEntries_schema_1.OffenseEntry]),
    __param(0, (0, type_graphql_1.Arg)("batterId")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], OffenseEntryResolver.prototype, "getOffenseEntries", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => offenseEntries_schema_1.OffenseEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [offenseEntries_schema_1.OffenseEntryInput, Object]),
    __metadata("design:returntype", Promise)
], OffenseEntryResolver.prototype, "createOffenseEntry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => offenseEntries_schema_1.OffenseEntry),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [offenseEntries_schema_1.OffenseEntryInput, Object]),
    __metadata("design:returntype", Promise)
], OffenseEntryResolver.prototype, "updateOffenseEntry", null);
OffenseEntryResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => offenseEntries_schema_1.OffenseEntry)
], OffenseEntryResolver);
exports.OffenseEntryResolver = OffenseEntryResolver;
//# sourceMappingURL=offenseEntries.resolvers.js.map