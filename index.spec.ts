import { PhoneNumber } from "./index";

test('should return the correct phone number - KSA', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('SA');
    expect(phoneNumber).toContain('5');
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number and with country code - KSA', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('SA', true);
    expect(phoneNumber).toContain('+966');
    expect(phoneNumber.length).toEqual(13);
});

test('should return the correct phone number - UAE', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('AE');
    expect(phoneNumber).toContain('5');
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number - non supported country', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('ABC');
    expect(phoneNumber).toContain('5');
    expect(phoneNumber.length).toEqual(9);
});
