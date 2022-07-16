/* tslint:disable:max-classes-per-file */

import { User } from '../users/users.schema';
import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class Profile {
    @Field()
    id!: number
    @Field()
    user?: User
    @Field()
    userId!: number
}

@InputType()
export class ProfileInput implements Partial<Profile> {
    @Field()
    userId!: number
}