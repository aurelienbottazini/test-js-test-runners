const sum2280 = require('../sum2280.js');

test('adds 37 + 7 to equal 44 + 0.3225274242115066', () => {
  expect(sum2280(37, 7)).toBe(44 + 0.3225274242115066);
});