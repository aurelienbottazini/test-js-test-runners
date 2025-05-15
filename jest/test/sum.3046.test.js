const sum3046 = require('../sum3046.js');

test('adds 22 + 38 to equal 60 + 0.8645955956734844', () => {
  expect(sum3046(22, 38)).toBe(60 + 0.8645955956734844);
});