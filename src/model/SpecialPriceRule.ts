import IPriceRule from "./IPriceRule";

class SpecialPriceRule implements IPriceRule {
    isMatch(product: { sku: string; }): boolean {
        return product.sku.startsWith("SP");
    }

    calculatePrice(product: any, quantity: any): number {
        let setsOfThree = ~~(quantity / 3);
        return (product.unitPrice * quantity) * (1 - (setsOfThree < 3 ? 0.2*setsOfThree : 0.5))
    }
    
}

export default SpecialPriceRule;