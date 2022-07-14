// import type { GraphQLContext } from '../../context';
// export const resolvers = {
//     Query: {
//         allUsers: async(
//             parent: unknown,
//             args: {},
//             context: GraphQLContext,
//             ) => {
//                 // tslint:disable-next-line:no-console
//                 const result = await context.prisma.user.findMany();
//                 return result;
//         },
//         user: async(
//             parent: unknown,
//             args: { id: number },
//             context: GraphQLContext
//         ) => {
//             const result = await context.prisma.user.findUnique({
//                 where: {
//                     id: args.id
//                 }
//             })
//             return result;
//         }
//     }
// }
//# sourceMappingURL=index.js.map