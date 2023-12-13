export default class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId
    this.categoryName = categoryName
  }

  displayInfo() {
    return {
      categoryId: this.categoryId,
      categoryName: this.categoryName,
    }
  }

  updateCategory(categoryName) {
    this.categoryName = categoryName
  }
}
