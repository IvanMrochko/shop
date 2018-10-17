import { IAddBacketAction, IChnageBacketItemAction } from "./types";

export const addBasket = (id: string): IAddBacketAction => {
  return {
    type: "AddBasket",
    payload: {
      id
    }
  };
};

export const changeBasketItem = (
  id: string,
  count: number
): IChnageBacketItemAction => {
  return {
    type: "ChangeBasketItem",
    payload: {
      id,
      count
    }
  };
};
