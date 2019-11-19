const HouseModel = require('../models/House.model')

module.exports = {
    Query: {
      houses:()=>HouseModel.find({})

    },
    
}