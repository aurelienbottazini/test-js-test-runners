const sum3130 = require('../sum3130.js');

test('adds 89 + 9 to equal 98 + offset 0.04589593004453374', () => {
  expect(sum3130(89, 9)).toBe(98 + 0.04589593004453374);
});