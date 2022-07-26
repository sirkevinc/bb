/* tslint:disable:max-classes-per-file */

import { Field, ObjectType, InputType } from "type-graphql"
@ObjectType()
export class OffenseEntry{
    @Field()
    id?: number
    @Field()
    batterId?: number
    @Field()
    result?: string
    @Field()
    inning?: number
}

@InputType()
export class OffenseCreateInput implements Partial<OffenseEntry>{
    @Field()
    batterId: number
    @Field()
    result: string
    @Field()
    inning: number
}

@InputType()
export class OffenseUpdateInput extends OffenseCreateInput {
    @Field()
    id: number
}