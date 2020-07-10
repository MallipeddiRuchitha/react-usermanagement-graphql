const { ApolloServer, gql } = require("apollo-server");
const schema = gql(`
type User { 
    id:ID!   
    name: String!
    email: String!
   }



type Query {
     user: [User]
   }

   
type Mutation{
    addUser(name:String!,email:String!):User!,
    editUser(id:ID!,name:String!,email:String!):User!
    deleteUser(id:ID!):String!,
}
`);

module.exports = schema;