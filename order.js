export default class Order {
  constructor(orderId) {
    this.orderId = orderId
    this.items = []
    this.totalAmount = 0
  }

  createOrder(cart) {
    this.items = [...cart.items]
    this.totalAmount = this.calculateTotalAmount()
  }

  displayOrderDetails() {
    return {
      orderId: this.orderId,
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
      totalAmount: this.totalAmount,
    }
  }

  calculateTotalAmount() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  }
}
