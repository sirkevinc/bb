/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql";
import { User } from "../users/users.schema.js";

@ObjectType()
export class Scorecard {
    @Field()
    id!: number
    @Field()
    public!: boolean
    @Field()
    user!: User
    @Field()
    userId!: number
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
    // @Field()
    // batterEntries: [BatteryEntry]
    // @Field()
    // pitcherEntries: [PitcherEntry]
    // @Field()
    // sumEntries: [SumsEntry]
    // @Field()
    // umpireEntries: [UmpireEntry]
}

@InputType()
export class ScorecardInput implements Partial<Scorecard> {
    @Field()
    userId!: number
    @Field()
    public!: boolean
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