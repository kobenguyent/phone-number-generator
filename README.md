# phone-number-generator

Creates random mobile phone numbers with a given country id.
Right now, supported countries are Germany(DE), Vietnam(VN), Saudi(SA), UAE(AE), Kuwait(KW), Bahrain(BH), Qatar(QA), Oman(OM). More on the way...

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
