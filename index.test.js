const isString = require('./index');

test('returns true for strings', () => {
  expect(isString('hello')).toBe(true);
  expect(isString(new String('hello'))).toBe(true);
});

test('returns false for non-strings', () => {
  expect(isString(42)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
});
