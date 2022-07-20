/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"

@ObjectType()
export class CatcherEntry {
    @Field()
    id: number
    @Field()
    scorecardId: number
    @Field()
    playerNumber: number
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    team: string
    @Field()
    pb: number
}

@InputType()
export class CatcherEntryInput implements Partial<CatcherEntry> {
    @Field()
    id: number
    @Field({ nullable: true })
    playerNumber: number
    @Field({ nullable: true })
    firstName: string
    @Field({ nullable: true })
    lastName: string
    @Field({ nullable: true })
    team!: string
    @Field({ nullable: true })
    pb: number
    @Field()
    scorecardId!: number
}