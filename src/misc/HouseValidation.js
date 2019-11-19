const Joi = require('@hapi/joi');

/**
 * @description it validates the user's input during registration of new houses
 * @param {*} data 
 * @returns error if any otherWise returns the data object obtained
 * as the parameter of the function
 */
const HouseValidation = (data) => {
    //create a Joi validation object
    const HouseValidationSchema = Joi.object().keys({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
        rent: Joi.number().required(),
        vacancy: Joi.boolean().required(),
        image:Joi.object({
            frontView:Joi.string().required(),
            livingRoom:Joi.string(),
            kitchen:Joi.string(),
            bedRoom:Joi.string(),
        })

    });

    return HouseValidationSchema.validate(data)
}

module.exports = HouseValidation;