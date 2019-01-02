// parent, args, ctx, info
const Mutations = {
 async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem({
        data:{
            ...args // or args.title etc
        }
    }, info) // need to pass info
    
    return item;
  }

  // createRecruiter(parent, args, ctx, info){
  //     console.log(args)
  // }
}

module.exports = Mutations
