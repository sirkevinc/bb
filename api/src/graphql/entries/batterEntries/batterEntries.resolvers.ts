import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import { BatterEntry, BatterCreateInput, BatterUpdateInput } from "../batterEntries/batterEntries.schema"
import { GraphQLContext } from "../../../context"

@Resolver(() => BatterEntry)
export class BatterEntryResolver {
    @Query(() => BatterEntry)
    async getBatterEntry(@Arg("id") id: number, @Ctx() ctx: GraphQLContext): Promise<BatterEntry> {
        const result = await ctx.prisma.batterEntry.findUnique({
            where: {
                id
            },
            include: {
                offenseEntries: true
            }
        })
        return result;
    }

    @Query(() => [BatterEntry])
    async getBatterEntries(@Arg("scorecardId") scorecardId: number, @Ctx() ctx: GraphQLContext): Promise<BatterEntry[]> {
        const result = await ctx.prisma.batterEntry.findMany({
            where: {
                scorecardId
            },
            include: {
                offenseEntries: true
            }
        });
        return result;
    }

    @Mutation(() => BatterEntry)
    async createBatterEntry(
        @Arg("data") newBatterInput: BatterCreateInput,
        @Ctx() ctx: GraphQLContext): Promise<BatterEntry> {
            const result = await ctx.prisma.batterEntry.create({
                include: {
                    offenseEntries: true
                },
                data: newBatterInput
            })
            return result;
        }

    @Mutation(() => BatterEntry)
    async updateBatterEntry(
        @Arg("data") updatedBatterInput: BatterUpdateInput,
        @Ctx() ctx: GraphQLContext): Promise<BatterEntry> {
            const result = await ctx.prisma.batterEntry.update({
                where: {
                    id: updatedBatterInput.id
                },
                data: updatedBatterInput
            })
            return result;
        }
}