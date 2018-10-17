import { categories, filters, products } from "./../data";
import {
  IAddBacketAction,
  IChnageBacketItemAction,
  MenuStore
} from "./../types";

const initState: MenuStore = {
  categories,
  products,
  filters,
  basket: []
};

export function menuReduser(state: MenuStore = initState, action: any) {
  switch (action.type) {
    case "LOADED":
      return {
        ...state,
        // items: [...state.items, ...action.items],
        page: action.page
      };
    case "AddBasket": {
      const data = (action as IAddBacketAction).payload;
      const item = state.basket.find(b => b.product.id === data.id);
      if (item) {
        item.count += 1;
      }
       
      if (!item) {
        const product = state.products.find(t => t.id === data.id);

        if (!product) {
          throw new Error("product");
        }

        state.basket.push({
          product,
          count: 1
        });
      }
      
      return {
        ...state,
        basket: [...state.basket]
      };
    }
    case "ChangeBasketItem": {
      const data = (action as IChnageBacketItemAction).payload;
      const item = state.basket.find(b => b.product.id === data.id);
      if (item) {
        item.count = data.count;
      }

      return {
        ...state,
        basket: [...state.basket]
      };
    }

    default:
      return state;
  }
}
