interface IPriceRule {
    isMatch: (product: any) => boolean;
    calculatePrice: (product: any, quantity: any) => number;
}

export default IPriceRule;