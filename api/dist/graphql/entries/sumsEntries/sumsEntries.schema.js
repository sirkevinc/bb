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
exports.SumsEntryInput = exports.SumsEntry = void 0;
const type_graphql_1 = require("type-graphql");
let SumsEntry = class SumsEntry {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntry.prototype, "runs", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntry.prototype, "hits", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntry.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntry.prototype, "leftOnBase", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntry.prototype, "inning", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SumsEntry.prototype, "team", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntry.prototype, "scorecardId", void 0);
SumsEntry = __decorate([
    (0, type_graphql_1.ObjectType)()
], SumsEntry);
exports.SumsEntry = SumsEntry;
let SumsEntryInput = class SumsEntryInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntryInput.prototype, "runs", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntryInput.prototype, "hits", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntryInput.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntryInput.prototype, "leftOnBase", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntryInput.prototype, "inning", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SumsEntryInput.prototype, "team", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], SumsEntryInput.prototype, "scorecardId", void 0);
SumsEntryInput = __decorate([
    (0, type_graphql_1.InputType)()
], SumsEntryInput);
exports.SumsEntryInput = SumsEntryInput;
//# sourceMappingURL=sumsEntries.schema.js.map