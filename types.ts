
export interface DropdownItem {
  text: string;
  link?: string;
  isPix: boolean;
  pixCode?: string;
}

export interface Product {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  dropdownItems: DropdownItem[];
}

export interface Possibility {
  image: string;
  title: string;
  subtitle: string;
}
