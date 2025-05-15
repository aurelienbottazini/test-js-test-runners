const sum1397 = require('../sum1397.js');

test('adds 1 + 18 to equal 19 + offset 0.6554837909422939', () => {
  expect(sum1397(1, 18)).toBe(19 + 0.6554837909422939);
});