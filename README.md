# Ecommerce Server App

## Packages

1. Prisma: https://prisma.io/
   to Deploy during dev: prisma deploy -e variables.env
2. Prisma Bindings: https://github.com/prisma/prisma-binding
   Connects our client to Prisma Graphql - middleware  
3. GraphQl Yoga: https://github.com/prisma/graphql-yoga
   Apollo , Express and more  for a feature rich GraphQL server
   graphql-yoga is like create-react-app for building GraphQL servers. 
4. Mental Note: Create Types in Schema.graphql, then define the Query of the type then create resolver to return said type
5. Steps to add new piece of data to app: then deploy to Prisma
   1. Add Type to datamodel.prisma
   2. 