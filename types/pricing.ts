export type PricingPlan = {
  name: string;
  price: string;
  idealFor: string;
  includes: string[];
  featured?: boolean;
};
