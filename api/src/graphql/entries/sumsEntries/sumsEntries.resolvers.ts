import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import type { GraphQLContext } from "../../../context"
import { SumsEntry, SumsEntryInput } from "../sumsEntries/sumsEntries.schema"

@Resolver(() => SumsEntry)
export class SumsEntryResolver {
    @Query(() => SumsEntry)
    async getSumsEntry(@Arg("id") id: number, @Ctx() ctx: GraphQLContext): Promise<SumsEntry> {
        const result = await ctx.prisma.sumsEntry.findUnique({
            where: {
                id
            }
        })
        return result;
    }

    @Query(() => [SumsEntry])
    async getSumsEntries(
        @Arg("scorecardId") scorecardId: number,
        @Ctx() ctx: GraphQLContext): Promise<SumsEntry[]> {
            const result = await ctx.prisma.sumsEntry.findMany({
                where: {
                    scorecardId
                }
            })
            return result;
        }

    @Mutation(() => SumsEntry)
    async createSumsEntry(
        @Arg("data") newSumsInput: SumsEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<SumsEntry> {
            const result = await ctx.prisma.sumsEntry.create({
                data: newSumsInput
            })
            return result;
        }

    @Mutation(() => SumsEntry)
    async updateSumsEntry(
        @Arg("data") sumsInput: SumsEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<SumsEntry> {
            const result = await ctx.prisma.sumsEntry.update({
                where: {
                    id: sumsInput.id
                },
                data: sumsInput
            })
            return result;
        }
}