import classNames from "classnames";
import { formatMoney } from "../utils/formatMoney";

export default function Product({ product }) {
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
					disabled
					className={classNames({
						"rounded p-2 font-bold": true,
						"bg-gradient-to-b from-pink-500 to-red-500 text-white": false,
						"bg-gray-100 text-black": true,
					})}
				>
					Sell
				</button>
				<input
					type="text"
					value={0}
					className="text-center outline-none border border-gray-400 rounded"
				/>
				<button
					className={classNames({
						"rounded p-2 font-bold": true,
						"bg-gradient-to-b from-brand1 to-brand2 text-white": true,
						"bg-gray-100 text-black": false,
					})}
				>
					Buy
				</button>
			</div>
		</div>
	);
}
