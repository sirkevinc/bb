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
    id: number
    @Field()
    scorecardId!: number
    @Field({ nullable: true })
    team: string
    @Field({ nullable: true })
    playerNumber: number
    @Field({ nullable: true })
    firstName: string
    @Field({ nullable: true })
    lastName: string
    @Field({ nullable: true })
    position: string
    @Field({ nullable: true })
    atBats: number
    @Field({ nullable: true })
    runs: number
    @Field({ nullable: true })
    hits: number
    @Field({ nullable: true })
    rbis: number
}