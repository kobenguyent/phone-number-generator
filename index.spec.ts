import { PhoneNumber } from "./index";

test('should return the correct phone number - Germany', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('DE');
    expect(phoneNumber).toMatch(/^(16|17)/);
    expect(phoneNumber.length).toEqual(10);
    
    expect(phoneNumber).toMatch(/^(15)/);
    expect(phoneNumber.length).toEqual(11);
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

test('should return the correct phone number - non supported country', () => {
    const phoneNumber = PhoneNumber.phoneNumberGenerator('ABC');
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
