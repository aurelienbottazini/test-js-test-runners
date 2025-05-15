const sum532 = require('../sum532.js');

test('adds 39 + 6 to equal 45 + offset 0.005331690242763476', () => {
  expect(sum532(39, 6)).toBe(45 + 0.005331690242763476);
});