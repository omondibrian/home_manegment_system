import { gql } from 'apollo-server-express';

export default gql`
 extend type Query {
      users:[User!]!,
      login(name:String!,password:String!):Auth,
      tenants:[User!]!,
      landlords:[User!]!,
      user(id:ID!):User!
}
extend type Mutation {
    signup(name:String!,mobileNumber:String!,role:String!,houseId:String!,password:String!,profileimage: Upload):Auth
}

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
type User{
    id:ID!,
    name:String!,
    mobileNumber:String!,
    role:String!,
    houseId:String!
}
type Auth{
    token:String!,
    user:User!
}

`