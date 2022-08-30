import { configureStore } from "@reduxjs/toolkit";
import basket from "./basket";

const store = configureStore({
	reducer: {
		basket,
	},
});

export default store;
