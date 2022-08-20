import PricingCalculator from "./PricingCalculator";

class CartItem {
    id: any;
    product: any;
    quantity: any;
    pricingCalculator: PricingCalculator;

    constructor(itemObject: { id: any; product: any[]; quantity: any; }) {
        this.id = itemObject.id
        this.product = itemObject.product[0]
        this.quantity = itemObject.quantity
        this.pricingCalculator = new PricingCalculator();
    }

    calculateSubtotal(): number {
        return this.pricingCalculator.calculatePrice(this.product, this.quantity);
    }

    /*
    calculateSubtotal = () => {
        const sku = this.product.sku
        const normalPrice = this.product.unitPrice * this.quantity
        let total = 0;
        if (sku.startsWith("EA")) {
            total = normalPrice
        } else if (sku.startsWith("WE")) {
            total = normalPrice * 1000
        } else if (sku.startsWith("SP")) {
            const setsOfThree = ~~(this.quantity / 3)
            total = normalPrice * (1 - (setsOfThree < 3 ? 0.2*setsOfThree : 0.5))
        }
        return total
    }
    */
}

export default CartItem;