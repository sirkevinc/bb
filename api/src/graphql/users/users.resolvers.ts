import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import { User, UserInput, UserMessage } from "./users.schema"
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
            },
            include: {
                scorecards: true
            }
        })
        return result;
    }



    @Mutation(() => User)
    async createUser(
        // @Arg("username") username: string,
        // @Arg("email") email: string,
        // @Arg("password") password: string,
        @Arg("data") newUserInput: UserInput,
        @Ctx() ctx: GraphQLContext): Promise<User> {
        const result = await ctx.prisma.user.create({
            data: newUserInput
        })
        return result;
    }

    @Mutation(() => UserMessage)
    async deleteUser(@Arg("userId") userId: number, @Ctx() ctx: GraphQLContext): Promise<UserMessage> {
        try {
            const user = await ctx.prisma.user.delete({
                where: {
                    id: userId
                }
            })
            if (user) return { message: `${user.username}'s account successfully deleted` }
        } catch {
            return { message: "User deletion failed" }
        }
    }
}

// Future login?
// @Query((returns) => UserWithToken)
// async login(
//     @Arg("email") email: string,
//     @Arg("password") password: string,
//     @Ctx("ctx") ctx: IContext
// ) : Promise<UserWithToken> {
//     const user = await this.userRepo.findOneUser({ where: { email } });
//     const success = await compare(password, user.password);
//     if (!success) ctx.throw(401);
//     const token = await this.tokenRepo.createToken(user);

//     return {
//         user,
//         token
//     };
// }