// queries get 4 params, parent, ctx, args, info
const {forwardTo} = require('prisma-binding')

const Query = {
  items: forwardTo('db')  
//   async items(parent, args, ctx, info){
//       const items = await ctx.db.query.items()
//       return items;
//     }
};



module.exports = Query;
