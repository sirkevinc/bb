import { UsersResolver } from "../users/users.resolvers"
import { ProfileResolver } from "../profiles/profiles.resolvers"
import { ScorecardsResolver } from '../scorecards/scorecards.resolvers'
import { BatterEntryResolver } from '../entries/batterEntries/batterEntries.resolvers'
import { OffenseEntryResolver } from "../entries/offenseEntries/offenseEntries.resolvers"
import { PitcherEntryResolver } from "../entries/pitcherEntries/pitcherEntries.resolvers"
import { UmpireEntryResolver } from "../entries/umpireEntries/umpireEntries.resolvers"
import { SumsEntryResolver } from "../entries/sumsEntries/sumsEntries.resolvers"

module.exports = {
    UsersResolver,
    ProfileResolver,
    ScorecardsResolver,
    BatterEntryResolver,
    OffenseEntryResolver,
    PitcherEntryResolver,
    UmpireEntryResolver,
    SumsEntryResolver
}