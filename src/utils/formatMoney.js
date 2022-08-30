export function formatMoney(money, minimumFractionDigits) {
	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: minimumFractionDigits,
	});

	return formatter.format(money);
}

export const formatCash = (n) => {
	if (n < 1e3) return n;
	if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
	if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
	if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
	if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
