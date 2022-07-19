/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"
// import { BatterEntry } from "../batterEntries/batterEntries.schema"

@ObjectType()
export class OffenseEntry{
    @Field()
    id: number
    @Field()
    batterId!: number
    @Field()
    result: string
    @Field()
    inning: number
}

@InputType()
export class OffenseEntryInput implements Partial<OffenseEntry>{
    @Field()
    id: number
    @Field()
    batterId!: number
    @Field()
    result: string
    @Field()
    inning: number
}