/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql";
import { User } from "../users/users.schema";
import { BatterEntry } from "../entries/batterEntries/batterEntries.schema"
import { PitcherEntry } from "../entries/pitcherEntries/pitcherEntries.schema"
import { CatcherEntry } from "../entries/catcherEntries/catcherEntries.schema"
import { SumsEntry } from "../entries/sumsEntries/sumsEntries.schema"
import { UmpireEntry } from "../entries/umpireEntries/umpireEntries.schema"

@ObjectType()
export class Scorecard {
    @Field()
    id!: number
    @Field()
    userId!: number
    @Field()
    public!: boolean
    @Field()
    user!: User
    @Field()
    title!: string
    @Field()
    home: string
    @Field()
    away: string
    @Field()
    date: Date
    @Field()
    startTime: string
    @Field()
    endTime: string
    @Field()
    weather: string
    @Field()
    gameTime: string
    @Field()
    notes: string
    @Field()
    batterEntries: [BatterEntry]
    @Field()
    pitcherEntries: [PitcherEntry]
    @Field()
    catcherEntries: [CatcherEntry]
    @Field()
    sumEntries: [SumsEntry]
    @Field()
    umpireEntries: [UmpireEntry]
}

@InputType()
export class ScorecardInput implements Partial<Scorecard> {
    @Field()
    userId!: number
    @Field()
    public!: boolean
    @Field()
    title: string
    @Field()
    home: string
    @Field()
    away: string
    @Field()
    date: Date
    @Field()
    startTime: string
    @Field()
    endTime: string
    @Field()
    weather: string
    @Field()
    gameTime: string
    @Field()
    notes: string
}