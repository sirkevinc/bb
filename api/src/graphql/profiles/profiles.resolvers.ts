import { Query, Resolver, Arg, Ctx } from "type-graphql"
import { Profile, ProfileInput } from "./profiles.schema.js"
import { User } from "../users/users.schema"
import type { GraphQLContext } from "../../context"

@Resolver(() => Profile)
export class ProfileResolver {
    @Query(() => Profile)
    async getProfile(@Arg("userId") userId: number, @Ctx() ctx: GraphQLContext): Promise<Profile> {
        const result = await ctx.prisma.profile.findUnique({
            where: {
                userId
            },
            include: {
                user: true
            }
        })
        // tslint:disable-next-line:no-console
        return result;
    }
}