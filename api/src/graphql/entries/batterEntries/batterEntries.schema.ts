/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from 'type-graphql';
import { OffenseEntry } from "../offenseEntries/offenseEntries.schema"

@ObjectType()
export class BatterEntry {
    @Field()
    id?: number
    @Field()
    scorecardId?: number
    @Field()
    team?: string
    @Field()
    playerNumber?: number
    @Field()
    firstName?: string
    @Field()
    lastName?: string
    @Field()
    position?: string
    @Field()
    atBats?: number
    @Field()
    runs?: number
    @Field()
    hits?: number
    @Field()
    rbis?: number
    @Field(() => [OffenseEntry], { nullable: true })
    offenseEntries?: OffenseEntry[]
}

@InputType()
export class BatterCreateInput implements Partial<BatterEntry> {
    @Field()
    scorecardId: number
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
    @Field({ defaultValue: 0 })
    atBats: number
    @Field({ defaultValue: 0 })
    runs: number
    @Field({ defaultValue: 0 })
    hits: number
    @Field({ defaultValue: 0 })
    rbis: number
}

@InputType()
export class BatterUpdateInput extends BatterCreateInput {
    @Field()
    id: number
}