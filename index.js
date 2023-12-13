import Product from "./product.js"
import Cart from "./cart.js"
import Order from "./order.js"
import Category from "./category.js"

// Add new Product
const product1 = new Product(1, "Lepi", 800, "Lepi with RGB")
const product2 = new Product(2, "broken pc", 200, "almost dead :)")
// =================================================================

// Add new category
const goodStuff = new Category(1, "Good conditions")
const secondHand = new Category(2, "Second hand")
// =================================================================

// add cateogry to product
product1.addCategory(goodStuff)
product2.addCategory(goodStuff)
product2.addCategory(secondHand)
// =================================================================

// Update category
goodStuff.updateCategory("GOOOOOOODDDDD")
secondHand.updateCategory("boroken :))")
// =================================================================

// add to cart
const cart = new Cart(1)
cart.addItem(product1, 2)
cart.addItem(product2, 1)
// =================================================================

// remove item
cart.removeItem(product1)
// =================================================================

// create order
const order = new Order(1)
order.createOrder(cart)
// =================================================================

console.log(" ===================== Add Product =====================")
console.log("Product Info:", product1.displayInfo())
console.log("Category Info:", goodStuff.displayInfo())
console.log(
  " ================================================================="
)

console.log(
  " ===================== Remove Item from Cart ====================="
)
console.log(
  "Cart Info after removing product1:",
  JSON.stringify(cart.viewCart(), null, 2)
)
console.log(
  " ================================================================="
)

console.log(" ===================== Cart Info =====================")

console.log("Cart Info:", JSON.stringify(cart.viewCart(), null, 2))
console.log(
  " ================================================================="
)

console.log(" ===================== Order Info =====================")

console.log("Order Info:", JSON.stringify(order.displayOrderDetails(), null, 2))
console.log(
  " ================================================================="
)

// console.log(
//   "Updated Product Info:",
//   product1.updateProduct("New product1", 900, "A more powerful product1")
// )
// console.log("Updated Category Info:", goodStuff.displayInfo())
// console.log("Updated Category Info:", secondHand.displayInfo())

// Test the displayInfo function in Category
// console.log(
//   " ===================== Display Category Info ====================="
// )
// console.log("Category Info:", goodStuff.displayInfo())
// console.log(
//   " ================================================================="
// )
