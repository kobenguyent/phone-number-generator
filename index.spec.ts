import { PhoneNumber } from "./index";

test('should return the correct phone number - Germany', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('DE');
    expect(phoneNumber).toMatch(/^(15|16|17)/);
    expect(phoneNumber.length).toEqual(10);
});

test('should return the correct phone number - KSA', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('SA');
    expect(phoneNumber).toMatch(/^(55|50)/);
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number and with country code - KSA', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('SA', true);
    expect(phoneNumber).toMatch(/^\+966/);
    expect(phoneNumber.length).toEqual(13);
});

test('should return the correct phone number - UAE', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('AE');
    expect(phoneNumber).toMatch(/^(55|50)/);
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number - non supported country', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('ABC');
    expect(phoneNumber).toMatch(/^(55|50)/);
    expect(phoneNumber.length).toEqual(9);
});

test('should return the correct phone number - KW', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('KW');
    expect(phoneNumber).toMatch(/^(55|54|57)/);
    expect(phoneNumber.length).toEqual(8);
});

test('should return the correct phone number - BH', () => {
    const phoneNumber = new PhoneNumber().phoneNumberGenerator('BH');
    expect(phoneNumber).toMatch(/^(322|383|384|388|340|341|377|343|344|345)/);
    expect(phoneNumber.length).toEqual(9);
});
