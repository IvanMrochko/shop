// tslint:disable-next-line:interface-name
export interface StoreState {
  menu: MenuStore;
}
// tslint:disable-next-line:interface-name
export interface MenuStore {
  categories: ICategory[];
  products: IProduct[];
  filters: IFilter[];
  basket: IBasket[];
}

export interface IBasket {
  product: IProduct;
  count: number;
}
export interface IProduct {
  id: string;
  image: string;
  title: string;
  size: string;
  price: number;
  description: string;
  category_id: string;
  tag: string;
}

export interface ICategory {
  id: string;
  name: string;
  image: string;
}

export interface IFilter {
  id: string;
  name: string;
  items?: IFilter[];
}

export interface IAddBacketPlayload {
  id: string;
}

export interface IAddBacketAction {
  type: string;
  payload: IAddBacketPlayload;
}

export interface IChaтgeBacketItemPlayload {
  id: string;
  count: number;
}

export interface IChnageBacketItemAction {
  type: string;
  payload: IChaтgeBacketItemPlayload;
}
