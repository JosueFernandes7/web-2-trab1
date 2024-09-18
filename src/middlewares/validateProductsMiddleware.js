const productSchema = require('../models/product')

const validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body, { abortEarly: false })

    if (error) {
        const errors = error.details.map(err => ({
            field: err.context.key,
            message: err.message
        }))
        return res.status(400).json({ errors })
    }

    next()
}

module.exports = validateProduct
