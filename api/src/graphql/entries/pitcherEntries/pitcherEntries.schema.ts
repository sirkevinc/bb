/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"

@ObjectType()
export class PitcherEntry {
    @Field()
    id: number
    @Field()
    playerNumber?: number
    @Field()
    firstName?: string
    @Field()
    lastName?: string
    @Field()
    team?: string
    @Field()
    wls?: number
    @Field()
    ip?: number
    @Field()
    hits?: number
    @Field()
    runs?: number
    @Field()
    earnedRuns?: number
    @Field()
    bb?: number
    @Field()
    so?: number
    @Field()
    hb?: number
    @Field()
    bk?: number
    @Field()
    tbf?: number
    @Field()
    scorecardId!: number
}

@InputType()
export class PitcherEntryInput implements Partial<PitcherEntry> {
    @Field({ nullable: true })
    playerNumber: number
    @Field({ nullable: true })
    firstName: string
    @Field({ nullable: true })
    lastName: string
    @Field({ nullable: true })
    team: string
    @Field({ nullable: true })
    wls: number
    @Field({ nullable: true })
    ip: number
    @Field({ nullable: true })
    hits: number
    @Field({ nullable: true })
    runs: number
    @Field({ nullable: true })
    earnedRuns: number
    @Field({ nullable: true })
    bb: number
    @Field({ nullable: true })
    so: number
    @Field({ nullable: true })
    hb: number
    @Field({ nullable: true })
    bk: number
    @Field({ nullable: true })
    tbf: number
    @Field()
    id: number
    @Field()
    scorecardId!: number
}