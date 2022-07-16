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
exports.ProfileInput = exports.Profile = void 0;
const users_schema_1 = require("../users/users.schema");
const type_graphql_1 = require("type-graphql");
let Profile = class Profile {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", users_schema_1.User)
], Profile.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Profile.prototype, "userId", void 0);
Profile = __decorate([
    (0, type_graphql_1.ObjectType)()
], Profile);
exports.Profile = Profile;
let ProfileInput = class ProfileInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ProfileInput.prototype, "userId", void 0);
ProfileInput = __decorate([
    (0, type_graphql_1.InputType)()
], ProfileInput);
exports.ProfileInput = ProfileInput;
//# sourceMappingURL=profiles.schema.js.map