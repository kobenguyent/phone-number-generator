import { PhoneNumber } from "../src";

test('should return the correct phone number - Germany', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('DE');
    expect(phoneNumber).toMatch(/^(15|16|17)/);
    phoneNumber.startsWith('15') === true ? expect(phoneNumber.length).toEqual(11) : expect(phoneNumber.length).toEqual(10);
});

test('should return the correct phone number - KSA', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('SA');
    expect(phoneNumber).toMatch(/^(55|50)/);
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number and with country code - KSA', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('SA', true);
    expect(phoneNumber).toMatch(/^\+966/);
    expect(phoneNumber.length).toEqual(13);
});

test('should return the correct phone number - UAE', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('AE');
    expect(phoneNumber).toMatch(/^(55|50)/);
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number - KW', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('KW');
    expect(phoneNumber).toMatch(/^(55|54|57)/);
    expect(phoneNumber.length).toEqual(8);
});

test('should return the correct phone number - BH', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('BH');
    expect(phoneNumber).toMatch(/^(322|383|384|388|340|341|377|343|344|345)/);
    expect(phoneNumber.length).toEqual(8);
});

test('should return the correct phone number - QA', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('QA');
    expect(phoneNumber).toMatch(/^(33|44|55|66|77|31)/);
    expect(phoneNumber.length).toEqual(8);
});

test('should return the correct phone number - OM', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('OM');
    expect(phoneNumber).toMatch(/^(22|23|24|25|26|77|71|72|78|79|90|91|92|93|94|97|98|99)/);
    expect(phoneNumber.length).toEqual(8);
});

test('should return the correct phone number - VN', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('VN');
    expect(phoneNumber).toMatch(/^(91|92|93|94|96|97|98|99|32|33|34|35|36|37|38|52|56|58|59|70|76|77|78|79|81|82|83|84|85|86|87|88|89)/);
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number - US', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('US');
    expect(phoneNumber).toMatch(/^(201|202|203|205|206|207|208|209|210|212|213|214|215|216|217|218|219|224|225|228|229|231|234|239|240|248|251|252|253|254|256|260|262|267|269|270|272|274|281|301|302|303|304|305|307|308|309|310|312|313|314|315|316|317|318|319|320|321|323|330)/);
    expect(phoneNumber.length).toEqual(10);
});

test('should return the correct phone number with country code - US', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('US', true);
    expect(phoneNumber).toMatch(/^\+1/);
    expect(phoneNumber.length).toEqual(12);
});

test('should return the correct phone number - UK', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('UK');
    expect(phoneNumber).toMatch(/^(7400|7401|7402|7403|7404|7405|7406|7407|7408|7409|7500|7501|7502|7503|7504|7505|7506|7507|7508|7509|7700|7701|7702|7703|7704|7705|7706|7707|7708|7709|7800|7801|7802|7803|7804|7805|7806|7807|7808|7809|7900|7901|7902|7903|7904|7905|7906|7907|7908|7909)/);
    expect(phoneNumber.length).toEqual(10);
});

test('should return the correct phone number - FR', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('FR');
    expect(phoneNumber).toMatch(/^(60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79)/);
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number - IN', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('IN');
    expect(phoneNumber).toMatch(/^(9000|9001|9002|9003|9004|9005|9006|9007|9008|9009|8000|8001|8002|8003|8004|8005|8006|8007|8008|8009|7000|7001|7002|7003|7004|7005|7006|7007|7008|7009|6000|6001|6002|6003|6004|6005|6006|6007|6008|6009)/);
    expect(phoneNumber.length).toEqual(10);
});

test('should return the correct phone number - AU', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('AU');
    expect(phoneNumber).toMatch(/^(4000|4001|4002|4003|4004|4005|4006|4007|4008|4009|4100|4101|4102|4103|4104|4105|4106|4107|4108|4109|4200|4201|4202|4203|4204|4205|4206|4207|4208|4209|4300|4301|4302|4303|4304|4305|4306|4307|4308|4309|4400|4401|4402|4403|4404|4405|4406|4407|4408|4409)/);
    expect(phoneNumber.length).toEqual(10);
});

test('should return the correct phone number - CA', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('CA');
    expect(phoneNumber).toMatch(/^(204|226|236|249|250|289|306|343|365|403|416|418|431|437|438|450|506|514|519|548|579|581|587|604|613|639|647|672|705|709|778|780|782|807|819|825|867|873|902|905)/);
    expect(phoneNumber.length).toEqual(10);
});

test('should return the correct phone number - JP', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('JP');
    expect(phoneNumber).toMatch(/^(70|80|90)/);
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number - IT', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('IT');
    expect(phoneNumber).toMatch(/^(3000|3001|3002|3003|3004|3005|3006|3007|3008|3009|3100|3101|3102|3103|3104|3105|3106|3107|3108|3109|3200|3201|3202|3203|3204|3205|3206|3207|3208|3209|3300|3301|3302|3303|3304|3305|3306|3307|3308|3309|3400|3401|3402|3403|3404|3405|3406|3407|3408|3409)/);
    expect(phoneNumber.length).toEqual(10);
});

test('should return the correct phone number - ES', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('ES');
    expect(phoneNumber).toMatch(/^(60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79)/);
    expect(phoneNumber.length).toEqual(9);
});
