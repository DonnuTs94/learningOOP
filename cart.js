export default class Cart {
  constructor(cartId) {
    this.cartId = cartId
    this.items = []
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity })
  }

  removeItem(product) {
    this.items = this.items.filter((item) => item.product !== product)
  }

  viewCart() {
    return {
      cartId: this.cartId,
      items: this.items.map((item) => ({
        product: {
          productId: item.product.productId,
          productName: item.product.productName,
          price: item.product.price,
          description: item.product.description,
          categories: item.product.categories,
        },
        quantity: item.quantity,
      })),
    }
  }
}
