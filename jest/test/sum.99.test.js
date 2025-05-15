const sum99 = require('../sum99.js');

test('adds 10 + 39 to equal 49 + 0.7771753932834833', () => {
  expect(sum99(10, 39)).toBe(49 + 0.7771753932834833);
});