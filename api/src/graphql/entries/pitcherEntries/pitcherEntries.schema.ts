/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"
import { Scorecard } from "../../scorecards/scorecards.schema"

@ObjectType()
export class PitcherEntry {
    @Field()
    playerNumber!: number
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    team!: string
    @Field()
    wls: number
    @Field()
    ip: number
    @Field()
    hits: number
    @Field()
    runs: number
    @Field()
    earnedRuns: number
    @Field()
    bb: number
    @Field()
    so: number
    @Field()
    hb: number
    @Field()
    bk: number
    @Field()
    tbf: number
    @Field()
    scorecard!: Scorecard
    @Field()
    scorecardId!: number
}

@InputType()
export class PitcherEntryInput implements Partial<PitcherEntry> {
    @Field()
    playerNumber: number
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    team: string
    @Field()
    wls: number
    @Field()
    ip: number
    @Field()
    hits: number
    @Field()
    runs: number
    @Field()
    earnedRuns: number
    @Field()
    bb: number
    @Field()
    so: number
    @Field()
    hb: number
    @Field()
    bk: number
    @Field()
    tbf: number
    @Field()
    scorecardId!: number
}