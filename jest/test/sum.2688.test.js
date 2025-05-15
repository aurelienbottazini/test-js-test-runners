const sum2688 = require('../sum2688.js');

test('adds 53 + 1 to equal 54 + 0.39402710570603694', () => {
  expect(sum2688(53, 1)).toBe(54 + 0.39402710570603694);
});