/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"

@ObjectType()
export class SumsEntry {
    @Field()
    runs: number
    @Field()
    hits: number
    @Field()
    errors: number
    @Field()
    leftOnBase: number
    @Field()
    inning: number
    @Field()
    team: string
    @Field()
    scorecardId!: number

}
@InputType()
export class SumsEntryInput implements Partial<SumsEntry> {
    @Field()
    runs: number
    @Field()
    hits: number
    @Field()
    errors: number
    @Field()
    leftOnBase: number
    @Field()
    inning: number
    @Field()
    team: string
    @Field()
    scorecardId!: number
}