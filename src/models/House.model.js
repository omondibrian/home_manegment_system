const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    frontView:{
        type:String,
        required:true
    },
    livingRoom:{
        type:String,
        required:true
    },
    kitchen:{
        type:String,
        required:true
    },
    bedRoom:{
        type:String,
        required:true
    },
})
const houseSchema = new Schema({
    rent:{
        type:Number
    },
    name:{
        type:String
    },
    vacancy:{
        type:Boolean
    },
    image:{
        type:imageSchema
    },

})
module.exports=mongoose.model('House',houseSchema);