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
exports.UserInput = exports.User = void 0;
const client_1 = require("@prisma/client");
const type_graphql_1 = require("type-graphql");
let User = class User {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
let UserInput = class UserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "role", void 0);
UserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserInput);
exports.UserInput = UserInput;
//# sourceMappingURL=users.schema.js.map