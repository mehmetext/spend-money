import Header from "./components/Header";
import Items from "./components/Items";
import Money from "./components/Money";
import Receipt from "./components/Receipt";
import UserInfo from "./components/UserInfo";

function App() {
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
