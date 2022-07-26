"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_resolvers_1 = require("../users/users.resolvers");
const profiles_resolvers_1 = require("../profiles/profiles.resolvers");
const scorecards_resolvers_1 = require("../scorecards/scorecards.resolvers");
const batterEntries_resolvers_1 = require("../entries/batterEntries/batterEntries.resolvers");
const offenseEntries_resolvers_1 = require("../entries/offenseEntries/offenseEntries.resolvers");
const pitcherEntries_resolvers_1 = require("../entries/pitcherEntries/pitcherEntries.resolvers");
const umpireEntries_resolvers_1 = require("../entries/umpireEntries/umpireEntries.resolvers");
const sumsEntries_resolvers_1 = require("../entries/sumsEntries/sumsEntries.resolvers");
module.exports = {
    UsersResolver: users_resolvers_1.UsersResolver,
    ProfileResolver: profiles_resolvers_1.ProfileResolver,
    ScorecardsResolver: scorecards_resolvers_1.ScorecardsResolver,
    BatterEntryResolver: batterEntries_resolvers_1.BatterEntryResolver,
    OffenseEntryResolver: offenseEntries_resolvers_1.OffenseEntryResolver,
    PitcherEntryResolver: pitcherEntries_resolvers_1.PitcherEntryResolver,
    UmpireEntryResolver: umpireEntries_resolvers_1.UmpireEntryResolver,
    SumsEntryResolver: sumsEntries_resolvers_1.SumsEntryResolver
};
//# sourceMappingURL=index.js.map