import { negativeRegex, positiveRegex } from '../src/regex';

test('Negative regex', () => {
  expect(negativeRegex.test('hell')).toBeTruthy();
  expect(negativeRegex.test('hello')).toBeFalsy();
});

test('Positive regex', () => {
  expect(positiveRegex.test('hell')).toBeFalsy();
  expect(positiveRegex.test('great')).toBeTruthy();
  expect(positiveRegex.test('greater')).toBeFalsy();
});
