import { Query, Resolver, Arg, Ctx, Mutation } from "type-graphql"
import type { GraphQLContext } from "../../../context"
import { OffenseEntry, OffenseEntryInput } from '../offenseEntries/offenseEntries.schema'

@Resolver(() => OffenseEntry)
export class OffenseEntryResolver {
    @Query(() => OffenseEntry)
    async getOffenseEntry(@Arg("id") id: number, @Ctx() ctx: GraphQLContext): Promise<OffenseEntry> {
        const result = await ctx.prisma.offenseEntry.findUnique({
            where: {
                id
            }
        })
        return result;
    }

    @Query(() => [OffenseEntry])
    async getOffenseEntries(
        @Arg("batterId") batterId: number,
        @Ctx() ctx: GraphQLContext): Promise<OffenseEntry[]> {
            const result = await ctx.prisma.offenseEntry.findMany({
                where: {
                    batterId
                }
            })
            return result;
        }

    @Mutation(() => OffenseEntry)
    async createOffenseEntry(
        @Arg("data") newOffenseInput: OffenseEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<OffenseEntry> {
            const result = await ctx.prisma.offenseEntry.create({
                data: newOffenseInput
            })
            return result;
        }

    @Mutation(() => OffenseEntry)
    async updateOffenseEntry(
        @Arg("data") updatedOffenseInput: OffenseEntryInput,
        @Ctx() ctx: GraphQLContext): Promise<OffenseEntry> {
            const result = await ctx.prisma.offenseEntry.update({
                where: {
                    id: updatedOffenseInput.id
                },
                data: updatedOffenseInput
            })
            // tslint:disable-next-line:no-console
            return result;
        }
}