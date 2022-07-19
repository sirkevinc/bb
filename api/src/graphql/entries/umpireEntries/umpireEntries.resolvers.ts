import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import type { GraphQLContext } from "../../../context"
import { UmpireEntry, UmpireEntryInput } from "../umpireEntries/umpireEntries.schema"
@Resolver(() => UmpireEntry)
export class UmpireEntryResolver {
    @Query(() => UmpireEntry)
    async getUmpireEntry(@Arg("id") id: number, @Ctx() ctx: GraphQLContext): Promise<UmpireEntry> {
        const result = await ctx.prisma.umpireEntry.findUnique({
            where: {
                id
            }
        })
        return result;
    }

    @Query(() => [UmpireEntry])
    async getCatcherEntries(
        @Arg("scorecardId") scorecardId: number,
        @Ctx() ctx: GraphQLContext): Promise<UmpireEntry[]> {
            const result = await ctx.prisma.umpireEntry.findMany({
                where: {
                    scorecardId
                }
            })
            return result;
        }

    @Mutation(() => UmpireEntry)
    async createUmpireEntry(
        @Arg("data") newUmpireInput: UmpireEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<UmpireEntry> {
            const result = await ctx.prisma.umpireEntry.create({
                data: newUmpireInput
            })
            return result;
        }

    @Mutation(() => UmpireEntry)
    async updateUmpireEntry(
        @Arg("data") newUmpireInput: UmpireEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<UmpireEntry> {
            const result = await ctx.prisma.umpireEntry.update({
                where: {
                    id: newUmpireInput.id
                },
                data: newUmpireInput
            })
            return result;
        }
}