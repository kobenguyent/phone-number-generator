const supportedCountryList = ['DE', 'SA', 'AE', 'KW', 'BH', 'QA', 'OM', 'VN'];
const countryPhoneCodeMapping = {'DE': '+49','SA': '+966', 'AE': '+971', 'KW': '+965', 'BH': '+973', 'QA': '+974', 'OM': '+968', 'VN': '+84'};
const phoneNumberLengthMapping = {
    'DE': 7, 'SA': 7, 'AE': 7, 'KW': 6, 'BH': 5, 'QA': 6, 'OM': 6, 'VN': 7
}
const phonePrefixMapping = {
    'DE': ['151', '160', '170', '171', '175', '152', '162', '172', '173', '174', '155', '157', '159', '163', '176', '177', '178', '179'],
    'SA': ['50', '55'],
    'AE': ['50', '55'],
    'KW': ['55', '54', '57'],
    'BH': ['322', '383', '384', '388', '340', '341', '377', '343', '344', '345'],
    'QA': ['33', '44', '55', '66', '77', '31'],
    'OM': ['22', '23', '24', '25', '26', '77', '71', '72', '78', '79', '90', '91', '92', '93', '94', '97', '98', '99'],
    'VN': ['91', '92', '93', '94', '96', '97', '98', '99', '32', '33', '34', '35', '36', '37', '38', '52', '56', '58', '59', '70', '76', '77', '78', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89' ]
};
function supportedCountry(country = 'SA') {
    return supportedCountryList.includes(country) ? country : 'SA';
}

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
    static phoneNumberGenerator(country = 'SA', withCountryCode = false) {
        const _country = supportedCountry(country);

        const phoneNumber = getRandom(phonePrefixMapping[_country]) + generatePhoneNumber({phoneNumberLength: phoneNumberLengthMapping[_country]});
        return withCountryCode === true ? `${countryPhoneCodeMapping[_country]}${phoneNumber}` : phoneNumber;
    }
}
