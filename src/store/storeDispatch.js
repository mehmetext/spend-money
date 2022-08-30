import store from ".";
import { addBasket, removeBasket, changeCount, setTotal } from "./basket";

export const addBasketDispatch = (product) => {
	store.dispatch(addBasket(product));
};

export const changeCountDispatch = (product) => {
	store.dispatch(changeCount(product));
};

export const removeBasketDispatch = (product) => {
	store.dispatch(removeBasket(product));
};

export const setTotalDispatch = (action) => {
	store.dispatch(setTotal(action));
};
