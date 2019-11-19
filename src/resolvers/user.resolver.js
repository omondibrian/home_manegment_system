import UserModel from '../models/user.model'
import { RegisterUserResolver, loginUser } from '../misc/user'

export default {
    Query: {
        users: () => UserModel.find({}),
        login:(root,args,context,info)=>{
                return loginUser(args)
        },
        tenants:()=>UserModel.find({role:"tenant"}),
        landlords:()=>UserModel.find({role:"land lord"}),
        user: (root, args, context, info) => {
            return UserModel.findById(args.id)
        }

    },
    Mutation:{
    signup:(root,args,context,info)=>{
        console.log(args.profileimage);
            return RegisterUserResolver(args)
    }
    }

}