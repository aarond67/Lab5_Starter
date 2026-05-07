// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone number tests
test('valid phone number with dashes returns true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number without dashes returns true', () => {
  expect(isPhoneNumber('1234567890')).toBe(true);
});

test('phone number with letters returns false', () => {
  expect(isPhoneNumber('123-abc-7890')).toBe(false);
});

test('phone number too short returns false', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

// Email tests
test('valid email returns true', () => {
  expect(isEmail('student@ucsd.edu')).toBe(true);
});

test('valid email with dot returns true', () => {
  expect(isEmail('aaron.delgado@gmail.com')).toBe(true);
});

test('email without @ returns false', () => {
  expect(isEmail('aarondelgadogmail.com')).toBe(false);
});

test('email without domain returns false', () => {
  expect(isEmail('aaron@')).toBe(false);
});

// Strong password tests
test('strong password returns true', () => {
  expect(isStrongPassword('Password1!')).toBe(true);
});

test('another strong password returns true', () => {
  expect(isStrongPassword('HelloWorld2@')).toBe(true);
});

test('password without number returns false', () => {
  expect(isStrongPassword('Password!')).toBe(false);
});

test('password too short returns false', () => {
  expect(isStrongPassword('P1!')).toBe(false);
});

// Date tests
test('valid date with slashes returns true', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('valid date with dashes returns true', () => {
  expect(isDate('2024-12-25')).toBe(true);
});

test('date with letters returns false', () => {
  expect(isDate('December 25')).toBe(false);
});

test('invalid date returns false', () => {
  expect(isDate('99/99/9999')).toBe(false);
});

// Hex color tests
test('valid six digit hex color returns true', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('valid three digit hex color returns true', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('hex color without hashtag returns false', () => {
  expect(isHexColor('FFFFFF')).toBe(false);
});

test('hex color with invalid letters returns false', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});