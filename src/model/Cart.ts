import CartItem from "./CartItem";

class Cart {
    items: CartItem[];

    constructor() {
        this.items = []
    }

    addItem(cartItem: CartItem) {
        this.items.push(cartItem)
    }

    calculateTotal() {
        let total = 0
        for(let item of this.items) {
            total += item.subtotal;
        }
        return total
    }
}

export default Cart;