const sum = require('../sum');

test('adds 2 + 83 to equal 85', () => {
  expect(sum(2, 83)).toBe(85);
});