/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"

@ObjectType()
export class UmpireEntry {
    @Field()
    id: number
    @Field()
    name: string
    @Field()
    position: string
    @Field()
    scorecardId!: number
}
@InputType()
export class UmpireEntryInput implements Partial<UmpireEntry> {
    @Field({ nullable: true })
    name: string
    @Field({ nullable: true })
    position: string
    @Field()
    scorecardId!: number
    @Field()
    id: number
}