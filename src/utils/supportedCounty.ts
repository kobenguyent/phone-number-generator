const supportedCountryList = ["DE", "SA", "AE", "KW", "BH", "QA", "OM", "VN"];

export const supportedCountry = (country = "DE") => {
	return supportedCountryList.find((c) => c === country) || "DE";
};
