import {mappingList} from "./utils/mapping";
import { getRandom, getRandomInt } from "./utils/common";
import {supportedCountry} from "./utils/supportedCountry";

export class PhoneNumber {

	/*
	* Generate random phone number
	*
	* @param {import("./utils/supportedCountry").supportedCountry} country - the ISO country code to generate phone number
	* @param {boolean} withCountryCode - generate phone number with or without country code
	*/
	static phoneNumberGenerator(country: supportedCountry = "DE", withCountryCode = false) {
		const phoneNumber =
			getRandom(mappingList[country].prefix) +
			this.generatePhoneNumber({
				phoneNumberLength: mappingList[country].length,
			});
		return withCountryCode === true
			? `${mappingList[country].code}${phoneNumber}`
			: phoneNumber;
	}

	private static generatePhoneNumber({ phoneNumberLength }:{phoneNumberLength: number}): string {
		let phoneNumber = "";
		for (let i = 0; i < phoneNumberLength; i++) {
			phoneNumber += getRandomInt(0, 9);
		}
		return phoneNumber;
	}
}
