const express = require("express")
const errorHandler = require("./middlewares/errorMiddleware")

const app = express()

app.use(express.json()) // parsing JSON

// Importing routes
const routes = {
    "/": require("./routes/welcome"), // Ex01
    "/greeting": require("./routes/greeting"), // Ex02
    "/protected": require("./routes/protected"), // Ex03
    "/products": require("./routes/products"), // Ex04, Ex05, Ex06
    "/error": require("./routes/error") // Ex07
}

const registerRoutes = (app,routes) => {

    Object.keys(routes).forEach(path => {
        if(path === "/") {
            app.get(path, routes[path]) // For root route
        } else {
            app.use(path, routes[path]) // For all other routes
        }
    })
    
}

registerRoutes(app,routes)

// Error handling middleware 
app.use(errorHandler) 

module.exports = app
