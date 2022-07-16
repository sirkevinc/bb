import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import { User, UserInput } from "./users.schema"
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

    @Mutation(() => User)
    async addUser(
        @Arg("username") username: string,
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() ctx: GraphQLContext): Promise<User> {
        const result = await ctx.prisma.user.create({
            data: {
                username,
                email,
                password,
            }
        })
        return result;
    }
}