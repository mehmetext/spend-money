import classNames from "classnames";
import { formatMoney } from "../utils/formatMoney";
import {
	addBasketDispatch,
	changeCountDispatch,
	removeBasketDispatch,
} from "../store/storeDispatch";
import { useBasket } from "../store/basket";
import { useEffect } from "react";
import { useState } from "react";

export default function Product({ product }) {
	const { basket, balance } = useBasket();
	const [count, setCount] = useState(0);

	useEffect(() => {
		const productInBasket = basket.find((e) => e.id === product.id);

		if (productInBasket) {
			setCount(productInBasket.count);
		} else {
			setCount(0);
		}
		// eslint-disable-next-line
	}, [basket.find((e) => e.id === product.id)]);

	const addBasketHandle = () => {
		addBasketDispatch(product);
	};

	const removeBasketHandle = () => {
		removeBasketDispatch(product);
	};

	const handleChange = (e) => {
		changeCountDispatch({ ...product, count, newCount: +e.target.value });
	};

	return (
		<div
			key={product.id}
			className="bg-white flex flex-col items-center justify-center p-3"
		>
			<img
				className="h-28"
				src={product.image}
				alt={product.productName}
			/>
			<h2 className="font-bold text-lg">{product.productName}</h2>
			<h3 className="font-bold text-xl text-brand1 mb-5">
				{formatMoney(product.productPrice, 0)}
			</h3>
			<div className="grid w-full grid-cols-3 gap-3">
				<button
					onClick={removeBasketHandle}
					disabled={count < 1}
					className={classNames({
						"bg-gradient-to-b from-pink-500 to-red-500 text-white":
							count > 0,
						"bg-gray-100 text-black": count < 1,
						"rounded p-2 font-bold enabled:active:scale-90 transition-transform": true,
					})}
				>
					Sell
				</button>
				<input
					type="text"
					value={count}
					onKeyPress={(e) => {
						if (!/[0-9]/.test(e.key)) {
							e.preventDefault();
						}
					}}
					onChange={handleChange}
					className="text-center outline-none border border-gray-400 rounded"
				/>
				<button
					onClick={addBasketHandle}
					disabled={balance < product.productPrice}
					className={classNames({
						"bg-gradient-to-b from-brand1 to-brand2 text-white":
							balance + 1 > product.productPrice,
						"bg-gray-100 text-black":
							balance < product.productPrice,
						"rounded p-2 font-bold enabled:active:scale-90 transition-transform": true,
					})}
				>
					Buy
				</button>
			</div>
		</div>
	);
}
