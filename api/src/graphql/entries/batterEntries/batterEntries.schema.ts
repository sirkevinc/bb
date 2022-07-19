/* tslint:disable:max-classes-per-file */

import { OffenseEntry } from "../offenseEntries/offenseEntries.schema"
import { Field, ObjectType, InputType } from 'type-graphql';
import { Scorecard } from "../../scorecards/scorecards.schema"

@ObjectType()
export class BatterEntry {
    @Field()
    id: number
    @Field()
    scorecardId: number
    @Field(() => Scorecard)
    scorecard?: Scorecard
    @Field()
    team: string
    @Field()
    playerNumber: number
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    atBats: number
    @Field()
    runs: number
    @Field()
    hits: number
    @Field()
    rbis: number
    @Field(() => [OffenseEntry])
    offenseEntries?: OffenseEntry[]
}

@InputType()
export class BatterEntryInput implements Partial<BatterEntry> {
    @Field()
    scorecardId!: number
    @Field()
    team: string
    @Field()
    playerNumber: number
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    position: string
    @Field()
    atBats: number
    @Field()
    runs: number
    @Field()
    hits: number
    @Field()
    rbis: number
}