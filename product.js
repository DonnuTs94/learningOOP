export default class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId
    this.productName = productName
    this.price = price
    this.description = description
    this.categories = []
  }

  displayInfo() {
    return {
      productId: this.productId,
      productName: this.productName,
      price: this.price,
      description: this.description,
      categories: this.categories.map((category) => category.displayInfo()),
    }
  }

  updateProduct(productName, price, description) {
    this.productName = productName
    this.price = price
    this.description = description
    return this.displayInfo()
  }

  addCategory(category) {
    this.categories.push(category)
  }
}
