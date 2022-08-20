import IPriceRule from "./IPriceRule";
import NormalPriceRule from "./NormalPriceRule";
import SpecialPriceRule from "./SpecialPriceRule";
import WeightPriceRule from "./WeightPriceRule";

class PricingCalculator {
    pricingRules: IPriceRule[];

    constructor() {
        this.pricingRules = []
        this.pricingRules.push(new NormalPriceRule());
        this.pricingRules.push(new SpecialPriceRule())
        this.pricingRules.push(new WeightPriceRule())
    }

    calculatePrice(product: any, quantity: any): number {
        for(let priceRule of this.pricingRules) {
            if(priceRule.isMatch(product)){
                return priceRule.calculatePrice(product, quantity)
            }
        }
        return 0;
    }
}

export default PricingCalculator;