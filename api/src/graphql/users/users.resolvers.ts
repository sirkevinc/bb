import { Query, Resolver, Arg, Ctx } from "type-graphql"
import { User, UserInput } from "./users.schema.js"
import type { GraphQLContext } from "../../context"

@Resolver(() => User)
export class UsersResolver {
    @Query(() => [User])
    async getUsers(@Ctx() ctx: GraphQLContext): Promise<User[]> {
        const result = await ctx.prisma.user.findMany();
        return result;
    }

    @Query(() => User)
    async getUser(@Arg("id") id: number, @Ctx() ctx: GraphQLContext): Promise<User> {
        const result = await ctx.prisma.user.findUnique({
            where: {
                id
            }
        })
        return result;
    }
}