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
exports.CatcherEntryInput = exports.CatcherEntry = void 0;
const type_graphql_1 = require("type-graphql");
const scorecards_schema_1 = require("../../scorecards/scorecards.schema");
let CatcherEntry = class CatcherEntry {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CatcherEntry.prototype, "playerNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatcherEntry.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatcherEntry.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatcherEntry.prototype, "team", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CatcherEntry.prototype, "pb", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", scorecards_schema_1.Scorecard)
], CatcherEntry.prototype, "scorecard", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CatcherEntry.prototype, "scorecardId", void 0);
CatcherEntry = __decorate([
    (0, type_graphql_1.ObjectType)()
], CatcherEntry);
exports.CatcherEntry = CatcherEntry;
let CatcherEntryInput = class CatcherEntryInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CatcherEntryInput.prototype, "playerNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatcherEntryInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatcherEntryInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CatcherEntryInput.prototype, "team", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CatcherEntryInput.prototype, "pb", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CatcherEntryInput.prototype, "scorecardId", void 0);
CatcherEntryInput = __decorate([
    (0, type_graphql_1.InputType)()
], CatcherEntryInput);
exports.CatcherEntryInput = CatcherEntryInput;
//# sourceMappingURL=catcherEntries.schema.js.map