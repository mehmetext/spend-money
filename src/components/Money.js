import { useCountUp } from "react-countup";
import { useEffect, useRef } from "react";
import { useBasket } from "../store/basket";

export default function Money() {
	const { balance } = useBasket();

	const countUpRef = useRef(null);
	const { update } = useCountUp({
		ref: countUpRef,
		start: 0,
		end: balance,
		duration: 1,
		separator: ",",
		decimal: ".",
		prefix: "$",
	});

	useEffect(() => {
		update(balance);
	}, [balance]);

	return (
		<div className="text-4xl text-white p-4 font-bold flex items-center justify-center bg-gradient-to-b from-brand1 to-brand2 mb-3 sticky top-0">
			<div ref={countUpRef} />
		</div>
	);
}
