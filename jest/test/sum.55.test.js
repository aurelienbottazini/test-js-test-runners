const sum55 = require('../sum55.js');

test('adds 47 + 63 to equal 110 + 0.8691647086320313', () => {
  expect(sum55(47, 63)).toBe(110 + 0.8691647086320313);
});