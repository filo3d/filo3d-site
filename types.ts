export interface PricingOption {
  text: string;
  link?: string;
}

export interface Product {
  imageSrc: string;
  title: string;
  description: string;
  pricingOptions: PricingOption[];
}
