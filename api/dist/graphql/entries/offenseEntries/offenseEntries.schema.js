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
exports.OffenseUpdateInput = exports.OffenseCreateInput = exports.OffenseEntry = void 0;
const type_graphql_1 = require("type-graphql");
let OffenseEntry = class OffenseEntry {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], OffenseEntry.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], OffenseEntry.prototype, "batterId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], OffenseEntry.prototype, "result", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], OffenseEntry.prototype, "inning", void 0);
OffenseEntry = __decorate([
    (0, type_graphql_1.ObjectType)()
], OffenseEntry);
exports.OffenseEntry = OffenseEntry;
let OffenseCreateInput = class OffenseCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], OffenseCreateInput.prototype, "batterId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], OffenseCreateInput.prototype, "result", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], OffenseCreateInput.prototype, "inning", void 0);
OffenseCreateInput = __decorate([
    (0, type_graphql_1.InputType)()
], OffenseCreateInput);
exports.OffenseCreateInput = OffenseCreateInput;
let OffenseUpdateInput = class OffenseUpdateInput extends OffenseCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], OffenseUpdateInput.prototype, "id", void 0);
OffenseUpdateInput = __decorate([
    (0, type_graphql_1.InputType)()
], OffenseUpdateInput);
exports.OffenseUpdateInput = OffenseUpdateInput;
//# sourceMappingURL=offenseEntries.schema.js.map