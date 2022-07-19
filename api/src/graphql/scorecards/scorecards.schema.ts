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
    id?: number
    @Field()
    userId?: number
    @Field()
    public?: boolean
    @Field()
    title?: string
    @Field()
    home?: string
    @Field()
    visitor?: string
    @Field()
    date?: Date
    @Field()
    startTime?: string
    @Field()
    endTime?: string
    @Field()
    weather?: string
    @Field()
    gameTime?: string
    @Field()
    notes?: string
    @Field(() => [BatterEntry])
    batterEntries?: BatterEntry[]
    @Field(() => [PitcherEntry])
    pitcherEntries?: PitcherEntry[]
    @Field(() => [CatcherEntry])
    catcherEntries?: CatcherEntry[]
    @Field(() => [SumsEntry])
    sumEntries?: SumsEntry[]
    @Field(() => [UmpireEntry])
    umpireEntries?: UmpireEntry[]
}

@InputType()
export class ScorecardInput implements Partial<Scorecard> {
    @Field()
    id: number
    @Field()
    userId!: number
    @Field({ defaultValue: true })
    public: boolean
    @Field({ nullable: true })
    title?: string
    @Field({ nullable: true })
    home?: string
    @Field({ nullable: true })
    visitor?: string
    @Field({ nullable: true })
    date?: Date
    @Field({ nullable: true })
    startTime?: string
    @Field({ nullable: true })
    endTime?: string
    @Field({ nullable: true })
    weather?: string
    @Field({ nullable: true })
    gameTime?: string
    @Field({ nullable: true })
    notes?: string
}