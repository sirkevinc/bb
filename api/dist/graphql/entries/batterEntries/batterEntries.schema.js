"use strict";
/* tslint:disable:max-classes-per-file */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatterUpdateInput = exports.BatterCreateInput = exports.BatterEntry = void 0;
const type_graphql_1 = require("type-graphql");
const offenseEntries_schema_1 = require("../offenseEntries/offenseEntries.schema");
let BatterEntry = class BatterEntry {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], BatterEntry.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], BatterEntry.prototype, "scorecardId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BatterEntry.prototype, "team", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], BatterEntry.prototype, "playerNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BatterEntry.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BatterEntry.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BatterEntry.prototype, "position", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], BatterEntry.prototype, "atBats", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], BatterEntry.prototype, "runs", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], BatterEntry.prototype, "hits", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], BatterEntry.prototype, "rbis", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [offenseEntries_schema_1.OffenseEntry], { nullable: true }),
    __metadata("design:type", Array)
], BatterEntry.prototype, "offenseEntries", void 0);
BatterEntry = __decorate([
    (0, type_graphql_1.ObjectType)()
], BatterEntry);
exports.BatterEntry = BatterEntry;
let BatterCreateInput = class BatterCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], BatterCreateInput.prototype, "scorecardId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BatterCreateInput.prototype, "team", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], BatterCreateInput.prototype, "playerNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BatterCreateInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BatterCreateInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BatterCreateInput.prototype, "position", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], BatterCreateInput.prototype, "atBats", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], BatterCreateInput.prototype, "runs", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], BatterCreateInput.prototype, "hits", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], BatterCreateInput.prototype, "rbis", void 0);
BatterCreateInput = __decorate([
    (0, type_graphql_1.InputType)()
], BatterCreateInput);
exports.BatterCreateInput = BatterCreateInput;
let BatterUpdateInput = class BatterUpdateInput extends BatterCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], BatterUpdateInput.prototype, "id", void 0);
BatterUpdateInput = __decorate([
    (0, type_graphql_1.InputType)()
], BatterUpdateInput);
exports.BatterUpdateInput = BatterUpdateInput;
//# sourceMappingURL=batterEntries.schema.js.map