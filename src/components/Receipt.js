import { formatCash, formatMoney } from "../utils/formatMoney";

export default function Receipt() {
	return (
		<div className="bg-white p-3 flex flex-col justify-center items-center mb-3">
			<h1 className="font-bold text-3xl mb-3">Your Receipt</h1>
			<div className="max-w-full w-80">
				<table className="table-auto w-full">
					<tr>
						<td>Skyscraper</td>
						<td>x1</td>
						<td className="text-brand1 font-bold text-right">
							${formatCash(850000000)}
						</td>
					</tr>
				</table>
				<div className="flex justify-between font-bold border-t border-t-black mt-1 pt-1">
					<h5>TOTAL</h5>
					<h5 className="text-brand1">{formatMoney(5165165, 0)}</h5>
				</div>
			</div>
		</div>
	);
}
