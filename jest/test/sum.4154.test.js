const sum = require('../sum');

test('adds 32 + 83 to equal 115', () => {
  expect(sum(32, 83)).toBe(115);
});