import { gql } from 'apollo-server-express';

export default gql`
extend type Query {
    houses:[HouseType!]!
}

#house image type
    type ImageType{
        frontView:String!,
            livingRoom:String,
            kitchen:String,
            bedRoom:String
    }
#house image type
    type HouseType{
            name: String!,
            rent: String!,
            landlordId: String!,
            tenantId: ID!,
            images:ImageType
    }

`