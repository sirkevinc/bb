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
exports.ScorecardInput = exports.Scorecard = void 0;
const type_graphql_1 = require("type-graphql");
const batterEntries_schema_1 = require("../entries/batterEntries/batterEntries.schema");
const pitcherEntries_schema_1 = require("../entries/pitcherEntries/pitcherEntries.schema");
const catcherEntries_schema_1 = require("../entries/catcherEntries/catcherEntries.schema");
const sumsEntries_schema_1 = require("../entries/sumsEntries/sumsEntries.schema");
const umpireEntries_schema_1 = require("../entries/umpireEntries/umpireEntries.schema");
let Scorecard = class Scorecard {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Scorecard.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Scorecard.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Scorecard.prototype, "public", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Scorecard.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Scorecard.prototype, "home", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Scorecard.prototype, "visitor", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], Scorecard.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Scorecard.prototype, "startTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Scorecard.prototype, "endTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Scorecard.prototype, "weather", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Scorecard.prototype, "gameTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Scorecard.prototype, "notes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [batterEntries_schema_1.BatterEntry]),
    __metadata("design:type", Array)
], Scorecard.prototype, "batterEntries", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [pitcherEntries_schema_1.PitcherEntry]),
    __metadata("design:type", Array)
], Scorecard.prototype, "pitcherEntries", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [catcherEntries_schema_1.CatcherEntry]),
    __metadata("design:type", Array)
], Scorecard.prototype, "catcherEntries", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [sumsEntries_schema_1.SumsEntry]),
    __metadata("design:type", Array)
], Scorecard.prototype, "sumEntries", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [umpireEntries_schema_1.UmpireEntry]),
    __metadata("design:type", Array)
], Scorecard.prototype, "umpireEntries", void 0);
Scorecard = __decorate([
    (0, type_graphql_1.ObjectType)()
], Scorecard);
exports.Scorecard = Scorecard;
let ScorecardInput = class ScorecardInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ScorecardInput.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ defaultValue: true }),
    __metadata("design:type", Boolean)
], ScorecardInput.prototype, "public", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ScorecardInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ScorecardInput.prototype, "home", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ScorecardInput.prototype, "visitor", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], ScorecardInput.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ScorecardInput.prototype, "startTime", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ScorecardInput.prototype, "endTime", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ScorecardInput.prototype, "weather", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ScorecardInput.prototype, "gameTime", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ScorecardInput.prototype, "notes", void 0);
ScorecardInput = __decorate([
    (0, type_graphql_1.InputType)()
], ScorecardInput);
exports.ScorecardInput = ScorecardInput;
//# sourceMappingURL=scorecards.schema.js.map