const sum2653 = require('../sum2653.js');

test('adds 0 + 10 to equal 10 + 0.12973227869359483', () => {
  expect(sum2653(0, 10)).toBe(10 + 0.12973227869359483);
});