const sum2333 = require('../sum2333.js');

test('adds 33 + 87 to equal 120 + 0.24058467608005296', () => {
  expect(sum2333(33, 87)).toBe(120 + 0.24058467608005296);
});