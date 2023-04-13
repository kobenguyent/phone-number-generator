[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)
[![codecov](https://codecov.io/gh/kobenguyent/phone-number-generator/branch/main/graph/badge.svg?token=2BZRBS7U27)](https://codecov.io/gh/kobenguyent/phone-number-generator)
# phone-number-generator

NPM package: https://www.npmjs.com/package/phone-number-generator

Create random mobile phone numbers with a given country.
Right now, supported countries are:
- 🇩🇪 Germany(DE),
- 🇻🇳 Vietnam(VN),
- 🇸🇦 Saudi(SA),
- 🇦🇪 UAE(AE),
- 🇰🇼 Kuwait(KW),
- 🇧🇭 Bahrain(BH),
- 🇶🇦 Qatar(QA),
- 🇴🇲 Oman(OM). 

- More on the way...

# Installation

```sh
$ npm i phone-number-generator
```

# Usage

```js
import { PhoneNumber } from "phone-number-generator";

console.log(PhoneNumber.phoneNumberGenerator('SA')); // prints "5039485900"
// with country code
console.log(PhoneNumber.phoneNumberGenerator('SA', true)); // prints "+9665039485900"
```

# Tests - Code coverage

![Sunburst](https://codecov.io/gh/kobenguyent/phone-number-generator/branch/main/graphs/sunburst.svg?token=2BZRBS7U27)
