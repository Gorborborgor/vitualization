export enum VisualType {
  products,
  architecture
}

export interface Visual {
  _id: string;
  name: string;
  description?: string;
  img?: string;
  creationDate: string;
  type: VisualType;
}

export interface Product extends Visual {
  type: VisualType.products
}

export interface Architecture extends Visual {
  type: VisualType.architecture
}
