import IPriceRule from "./IPriceRule";

class NormalPriceRule implements IPriceRule {
    isMatch(product: { sku: string; }): boolean {
        return product.sku.startsWith("EA");
    }
    calculatePrice(product: any, quantity: any): number {
        return product.unitPrice * quantity;
    }
    
}

export default NormalPriceRule;