/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql";
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
    @Field(() => [BatterEntry], { nullable: true })
    batterEntries?: BatterEntry[]
    @Field(() => [PitcherEntry], { nullable: true })
    pitcherEntries?: PitcherEntry[]
    @Field(() => [CatcherEntry], { nullable: true })
    catcherEntries?: CatcherEntry[]
    @Field(() => [SumsEntry], { nullable: true })
    sumEntries?: SumsEntry[]
    @Field(() => [UmpireEntry], { nullable: true })
    umpireEntries?: UmpireEntry[]

}

@InputType()
export class ScorecardCreateInput implements Partial<Scorecard> {
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

@InputType()
export class ScorecardUpdateInput extends ScorecardCreateInput {
    @Field()
    id: number
}