const Joi = require('@hapi/joi');

/**
 * @description it validates the user's input during registration
 * @param {*} data 
 * @returns error if any otherWise returns the data object obtained
 * as the parameter of the function
 */
const registrationValidation = (data) => {
    //create a Joi validation object
    const UserValidationSchema = Joi.object().keys({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{3,30}$/),
        role: Joi.string().min(6).required(),
        houseId: Joi.string().required(),
        mobileNumber: Joi.string().min(10).required(),

    });
    
    return UserValidationSchema.validate(data)
}

const loginValidation = data =>{
    const UserValidationSchema = Joi.object().keys({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{3,30}$/)
    });

    return UserValidationSchema.validate(data)
}

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;