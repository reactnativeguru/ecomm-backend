// parent, args, ctx, info
const Mutations = {
 async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem({
        data:{
            ...args // or args.title etc
        }
    }, info) // need to pass info
    
    return item;
  },

 async  deleteItem(parent, args, ctx, info){
      const where = {id: args.id};
      // find item
      const item = await ctx.db.query.item({where}, `{
          id
       title}`
       )
      // check delete permissions
      // todo
      // delete
      return ctx.db.mutation.deleteItem({where}, info)
          
  }

  // createRecruiter(parent, args, ctx, info){
  //     console.log(args)
  // }
}

module.exports = Mutations
