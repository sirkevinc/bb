import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import type { GraphQLContext } from "../../../context"
import { CatcherEntry, CatcherEntryInput } from '../catcherEntries/catcherEntries.schema'

@Resolver(() => CatcherEntry)
export class CatcherEntryResolver {
    @Query(() => CatcherEntry)
    async getCatcherEntry(@Arg("id") id: number, @Ctx() ctx: GraphQLContext): Promise<CatcherEntry> {
        const result = await ctx.prisma.catcherEntry.findUnique({
            where: {
                id
            }
        })
        return result;
    }

    @Query(() => [CatcherEntry])
    async getCatcherEntries(
        @Arg("scorecardId") scorecardId: number,
        @Ctx() ctx: GraphQLContext): Promise<CatcherEntry[]> {
            const result = await ctx.prisma.catcherEntry.findMany({
                where: {
                    scorecardId
                }
            })
            return result;
        }

    @Mutation(() => CatcherEntry)
    async createCatcherEntry(
        @Arg("data") newCatcherInput: CatcherEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<CatcherEntry> {
            const result = await ctx.prisma.catcherEntry.create({
                data: newCatcherInput
            })
            return result;
        }

    @Mutation(() => CatcherEntry)
    async updateCatcherEntry(
        @Arg("data") updatedCatcherInput: CatcherEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<CatcherEntry> {
            const result = await ctx.prisma.catcherEntry.update({
                where: {
                    id: updatedCatcherInput.id
                },
                data: updatedCatcherInput
            })
            // tslint:disable-next-line:no-console
            return result;
        }
}