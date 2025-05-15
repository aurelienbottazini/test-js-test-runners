const sum512 = require('../sum512.js');

test('adds 7 + 61 to equal 68 + offset 0.26326093575546594', () => {
  expect(sum512(7, 61)).toBe(68 + 0.26326093575546594);
});