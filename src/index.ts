import { supportedCountry } from "./utils/supportedCounty";
import {
	countryPhoneCodeMapping,
	phoneNumberLengthMapping,
	phonePrefixMapping,
} from "./utils/mapping";
import { getRandom, getRandomInt } from "./utils/common";

export class PhoneNumber {
	static phoneNumberGenerator(country = "DE", withCountryCode = false) {
		const _country = supportedCountry(country);

		const phoneNumber =
			getRandom(phonePrefixMapping[_country]) +
			this.generatePhoneNumber({
				phoneNumberLength: phoneNumberLengthMapping[_country],
			});
		return withCountryCode === true
			? `${countryPhoneCodeMapping[_country]}${phoneNumber}`
			: phoneNumber;
	}

	private static generatePhoneNumber({ phoneNumberLength }) {
		let phoneNumber = "";
		for (let i = 0; i < phoneNumberLength; i++) {
			phoneNumber += getRandomInt(0, 9);
		}
		return phoneNumber;
	}
}
