import { useBasket } from "../store/basket";
import { formatCash, formatMoney } from "../utils/formatMoney";

export default function Receipt() {
	const { basket, total } = useBasket();

	return (
		<div className="bg-white p-3 flex flex-col justify-center items-center mb-3">
			<h1 className="font-bold text-3xl mb-3">Your Receipt</h1>
			<div className="max-w-full w-80">
				<table className="table-auto w-full">
					<tbody>
						{basket.map((product, i) => (
							<tr key={i}>
								<td className="w-7/12">
									{product.productName}
								</td>
								<td className="w-3/12">
									x{formatCash(product.count)}
								</td>
								<td className="w-2/12 text-brand1 font-bold text-right">
									$
									{formatCash(
										product.productPrice * product.count
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex justify-between font-bold border-t border-t-black mt-1 pt-1">
					<h5>TOTAL</h5>
					<h5 className="text-brand1">{formatMoney(total, 0)}</h5>
				</div>
			</div>
		</div>
	);
}
