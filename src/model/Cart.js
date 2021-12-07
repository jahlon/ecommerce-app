class Cart {
    constructor() {
        this.items = []
    }

    addItem(cartItem) {
        this.items.push(cartItem)
    }

    calculateTotal() {
        let total = 0
        for(let item in this.items) {
            total += item.calculateSubtotal()
        }
        return total
    }
}

export default Cart;