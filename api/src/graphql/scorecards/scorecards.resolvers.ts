import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import { Scorecard, ScorecardInput } from './scorecards.schema'
import type { GraphQLContext } from "../../context"

@Resolver(() => Scorecard)
export class ScorecardsResolver {
    @Query(() => [Scorecard])
    async getScorecards(@Arg("userId") userId: number, @Ctx() ctx: GraphQLContext): Promise<Scorecard[]>{
        const result = await ctx.prisma.scorecard.findMany({
            where: {
                userId
            },
            orderBy: {
                date: 'desc'
            }
        })
        return result;
    }

    @Query(() => Scorecard)
    async getScorecard(@Arg("id") id: number, @Ctx() ctx: GraphQLContext): Promise<Scorecard>{
        const result = await ctx.prisma.scorecard.findUnique({
            where: {
                id
            },
            include: {
                batterEntries: true,
                pitcherEntries: true,
                catcherEntries: true,
                sumsEntries: true,
                umpireEntries: true
            }
        })
        return result;
    }

    @Mutation(() => Scorecard)
    async createScorecard(
        @Arg("data") newScorecardInput: ScorecardInput,
        @Ctx() ctx: GraphQLContext): Promise<Scorecard> {
            const result = await ctx.prisma.scorecard.create({
                data: newScorecardInput
            })
            return result;
        }
}