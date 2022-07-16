/* tslint:disable:max-classes-per-file */

import { Role } from '@prisma/client';
import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class User {
    @Field()
    id!: number
    @Field()
    createdAt: Date
    @Field()
    username!: string
    @Field()
    email!: string
    @Field()
    password!: string
    @Field()
    role!: Role
}
@ObjectType()
export class UserMessage {
    @Field()
    message: string
}

@InputType()
export class UserInput implements Partial<User> {
    @Field()
    username!: string
    @Field()
    email!: string
    @Field()
    password!: string
    @Field({ defaultValue: 'USER' })
    role: Role
}