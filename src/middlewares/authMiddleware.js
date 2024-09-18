const fakeAuthorizer = (req, res, next) => {
    const token = req.headers['authorization'] 
    
    if (token) {
        next()
    } else {
        res.status(401).json({ error: 'Unauthorized: No token provided' })
    }
}

module.exports = fakeAuthorizer
