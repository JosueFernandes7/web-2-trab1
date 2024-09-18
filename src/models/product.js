const Joi = require('joi')

const productSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': 'Name must be a string',
        'string.empty': 'Name is required',
    }),
    category: Joi.string().required().messages({
        'string.base': 'Category must be a string',
        'string.empty': 'Category is required',
    }),
    price: Joi.number().min(0).required().messages({
        'number.base': 'Price must be a number',
        'number.min': 'Price must be a non-negative number',
        'any.required': 'Price is required',
    }),
})

module.exports = productSchema
