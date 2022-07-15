const countryPhoneCodeMapping = {'SA': '+966', 'AE': '+971', 'KW': '+965', 'BH': '+973', 'QA': '+974', 'OM': '+968'};
const phoneNumberLengthMapping = {
    'SA': 7, 'AE': 7, 'KW': 6, 'BH': 6, 'QA': 6, 'OM': 6
}
const phonePrefixMapping = {
    'SA': ['50', '55'],
    'AE': ['50', '55'],
    'KW': ['55', '54', '57'],
    'BH': ['322', '383', '384', '388', '340', '341', '377', '343', '344', '345'],
    'QA': ['33', '44', '55', '66', '77', '31'],
    'OM': ['22', '23', '24', '25', '26', '77', '71', '72', '78', '79', '90', '91', '92', '93', '94', '97', '98', '99']
};

function getRandom(list) {
    return list[Math.floor((Math.random() * list.length))];
}

function generatePhoneNumber({phoneNumberLength}) {
    let phoneNumber = '';
    for (let i = 0; i < phoneNumberLength; i++) {
        phoneNumber += getRandomInt(0, 9);
    }
    return phoneNumber;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export class PhoneNumber {
    phoneNumberGenerator(country = 'SA', withCountryCode = false) {
        const _country = this.supportedCountry(country);

        const phoneNumber = getRandom(phonePrefixMapping[_country]) + generatePhoneNumber({phoneNumberLength: phoneNumberLengthMapping[_country]});
        return withCountryCode === true ? `${countryPhoneCodeMapping[_country]}${phoneNumber}` : phoneNumber;
    }

    supportedCountry(country = 'SA') {
        const supportedList = ['SA', 'AE', 'KW', 'BH', 'QA', 'OM'];
        return supportedList.includes(country) ? country : 'SA';
    }
}
