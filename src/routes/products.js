const express = require("express")
const router = express.Router()
const { getProducts, saveProducts } = require("../utils")
const validateProduct = require("../middlewares/validateProductsMiddleware")

router.get("/", (req, res) => {
  const products = getProducts()
  const { category, priceMin, priceMax } = req.query

  let filteredProducts = products

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    )
  }

  if (priceMin) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= parseFloat(priceMin)
    )
  }

  if (priceMax) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseFloat(priceMax)
    )
  }

  res.json({
    status: 200,
    message: "Filtered products",
    products: filteredProducts,
  })
})

// Test case
// http://localhost:3000/products?category=electronics

router.post("/", validateProduct, (req, res) => {
  const newProduct = req.body
  const products = getProducts()
  const newId = products.length + 1
  const productWithId = { id: newId, ...newProduct }

  products.push(productWithId)
  saveProducts(products)


  res.status(200).json({
    status: 200,
    message: "Product added successfully",
    product: productWithId
  })
})

// Test case
// {
//   "name": "Tablet",
//   "category": "electronics",
//   "price": 300
// }


module.exports = router
