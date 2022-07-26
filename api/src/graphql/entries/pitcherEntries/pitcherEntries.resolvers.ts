import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import type { GraphQLContext } from "../../../context"
import { PitcherEntry, PitcherCreateInput, PitcherUpdateInput } from "../pitcherEntries/pitcherEntries.schema"

@Resolver(() => PitcherEntry)
export class PitcherEntryResolver {
    @Query(() => PitcherEntry)
    async getPitcherEntry(@Arg("id") id: number, @Ctx() ctx: GraphQLContext): Promise<PitcherEntry> {
        const result = await ctx.prisma.pitcherEntry.findUnique({
            where: {
                id
            }
        })
        return result;
    }

    @Query(() => [PitcherEntry])
    async getPitchererEntries(
        @Arg("scorecardId") scorecardId: number,
        @Ctx() ctx: GraphQLContext): Promise<PitcherEntry[]> {
            const result = await ctx.prisma.pitcherEntry.findMany({
                where: {
                    scorecardId
                }
            })
            return result;
        }

    @Mutation(() => PitcherEntry)
    async createPitcherEntry(
        @Arg("data") newPitcherInput: PitcherCreateInput,
        @Ctx() ctx: GraphQLContext): Promise<PitcherEntry> {
            const result = await ctx.prisma.pitcherEntry.create({
                data: newPitcherInput
            })
            return result;
        }

    @Mutation(() => PitcherEntry)
    async updatePitcherEntry(
        @Arg("data") pitcherInput: PitcherUpdateInput,
        @Ctx() ctx: GraphQLContext): Promise<PitcherEntry> {
            const result = await ctx.prisma.pitcherEntry.update({
                where: {
                    id: pitcherInput.id
                },
                data: pitcherInput
            })
            return result;
        }
}