import { useEffect } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Money from "./components/Money";
import Receipt from "./components/Receipt";
import UserInfo from "./components/UserInfo";
import { useBasket } from "./store/basket";
import { setTotalDispatch } from "./store/storeDispatch";

function App() {
	const { basket } = useBasket();

	useEffect(() => {
		const sum = basket.reduce((initial, item) => {
			return initial + item.count * item.productPrice;
		}, 0);

		setTotalDispatch(sum);
	}, [basket]);

	return (
		<>
			<Header />
			<div className="container mx-auto">
				<UserInfo />
				<Money />
				<Items />
				<Receipt />
			</div>
		</>
	);
}

export default App;
