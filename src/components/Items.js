import products from "../utils/products";
import Product from "./Product";

export default function Items() {
	return (
		<div className="grid grid-cols-1 gap-3 mb-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
}
