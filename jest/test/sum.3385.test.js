const sum3385 = require('../sum3385.js');

test('adds 74 + 88 to equal 162 + 0.9015859041137234', () => {
  expect(sum3385(74, 88)).toBe(162 + 0.9015859041137234);
});