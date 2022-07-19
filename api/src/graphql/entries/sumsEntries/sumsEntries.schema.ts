/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"

@ObjectType()
export class SumsEntry {
    @Field()
    id: number
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
    @Field({ nullable: true })
    runs: number
    @Field({ nullable: true })
    hits: number
    @Field({ nullable: true })
    errors: number
    @Field({ nullable: true })
    leftOnBase: number
    @Field({ nullable: true })
    inning: number
    @Field({ nullable: true })
    team: string
    @Field()
    scorecardId!: number
    @Field()
    id: number
}