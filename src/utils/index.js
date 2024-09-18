const fs = require("fs")
const path = require("path")

const getProducts = () => {
  const data = fs.readFileSync(path.join(__dirname, "../data/products.json"))
  return JSON.parse(data)
}

const saveProducts = (products) => {
  fs.writeFileSync(
    path.join(__dirname, "../data/products.json"),
    JSON.stringify(products, null, 2),
    "utf-8"
  )
}

module.exports = {
  getProducts,
  saveProducts,
}
