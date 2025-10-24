
export interface DropdownOption {
  text: string;
  link?: string;
}

export interface Product {
  imageSrc: string;
  title: string;
  description: string;
  purchaseOptions: DropdownOption[];
}

export interface Possibility {
    title: string;
    description: string;
    imageSrc: string;
}
