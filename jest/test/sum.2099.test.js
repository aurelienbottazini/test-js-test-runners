const sum2099 = require('../sum2099.js');

test('adds 96 + 97 to equal 193 + 0.36205152491828807', () => {
  expect(sum2099(96, 97)).toBe(193 + 0.36205152491828807);
});