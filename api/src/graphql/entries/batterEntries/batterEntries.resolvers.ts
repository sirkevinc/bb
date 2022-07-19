import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import { BatterEntry, BatterEntryInput } from "../batterEntries/batterEntries.schema"
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
    async addBatterEntry(
        @Arg("data") newBatterInput: BatterEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<BatterEntry> {
            const result = await ctx.prisma.batterEntry.create({
                data: newBatterInput
            })
            return result;
        }

    @Mutation(() => BatterEntry)
    async updateBatterEntry(
        @Arg("data") updatedBatterInput: BatterEntryInput,
        @Arg("batterId") id: number,
        @Ctx() ctx: GraphQLContext): Promise<BatterEntry> {
            const result = await ctx.prisma.batterEntry.update({
                where: {
                    id
                },
                data: updatedBatterInput
            })
            // tslint:disable-next-line:no-console
            console.log('sldkfjslkdjf', updatedBatterInput)
            return result;
        }
}