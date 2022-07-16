/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"
import { Scorecard } from "../../scorecards/scorecards.schema"

@ObjectType()
export class CatcherEntry {
    @Field()
    playerNumber!: number
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    team!: string
    @Field()
    pb: number
    @Field()
    scorecard: Scorecard
    @Field()
    scorecardId!: number
}

@InputType()
export class CatcherEntryInput implements Partial<CatcherEntry> {
    @Field()
    playerNumber!: number
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    team!: string
    @Field()
    pb: number
    @Field()
    scorecardId!: number
}