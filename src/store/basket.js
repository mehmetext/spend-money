import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialBalance = 100000000000;

const initialState = {
	initialBalance: initialBalance,
	balance: initialBalance,
	basket: [],
	total: 0,
};

const slice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addBasket: (state, action) => {
			if (!state.basket.find((e) => e.id === action.payload.id)) {
				state.basket = [
					...state.basket,
					{ ...action.payload, count: 1 },
				];
			} else {
				state.basket = state.basket.map((e) => {
					if (e.id === action.payload.id) {
						e.count++;
					}
					return e;
				});
			}
		},
		removeBasket: (state, action) => {
			if (
				state.basket.find((e) => e.id === action.payload.id).count < 2
			) {
				state.basket = state.basket.filter(
					(e) => e.id !== action.payload.id
				);
			} else {
				state.basket = state.basket.map((e) => {
					if (e.id === action.payload.id) {
						e.count--;
					}
					return e;
				});
			}
		},
		changeCount: (state, action) => {
			if (
				state.balance +
					action.payload.count * action.payload.productPrice >
				action.payload.newCount * action.payload.productPrice
			) {
				action.payload.count = action.payload.newCount;
			} else {
				const currentBalance =
					state.balance +
					action.payload.count * action.payload.productPrice;
				const availableCount =
					currentBalance / action.payload.productPrice;
				action.payload.count = Math.floor(availableCount);
			}

			if (!state.basket.find((e) => e.id === action.payload.id)) {
				if (action.payload.count > 0) {
					state.basket = [...state.basket, action.payload];
				}
			} else {
				if (action.payload.count > 0) {
					state.basket = state.basket.map((e) => {
						if (e.id === action.payload.id) {
							e.count = action.payload.count;
						}
						return e;
					});
				} else {
					state.basket = state.basket.filter(
						(e) => e.id !== action.payload.id
					);
				}
			}
		},
		setTotal: (state, action) => {
			state.balance = state.initialBalance - action.payload;
			state.total = action.payload;
		},
	},
});

export const useBasket = () => useSelector((state) => state.basket);

export const { addBasket, changeCount, removeBasket, setTotal } = slice.actions;

export default slice.reducer;
