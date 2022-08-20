import IPriceRule from "./IPriceRule";

class WeightPriceRule implements IPriceRule {
    isMatch(product: { sku: string; }): boolean {
        return product.sku.startsWith("WE");
    }
    
    calculatePrice(product: any, quantity: any): number {
        return (product.unitPrice * quantity) * 1000;
    }
    
}

export default WeightPriceRule;