```
# phone-mobile-generator

Creates random mobile phone numbers with a given country id.
Right now, supported countries are Saudi(SA), UAE(AE), Kuwait(KW), Bahrain(BH), Qatar(QA), Oman(OM). More on the way...

# Installation

```sh
$ npm i phone-mobile-generator
```

# Usage

```js
import { PhoneNumber } from "phone-mobile-generator";

console.log(new PhoneNumber().phoneNumberGenerator('SA')); // prints "5039485900"
// with country code
console.log(new PhoneNumber().phoneNumberGenerator('SA', true)); // prints "+9665039485900"
```
