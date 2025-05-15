const sum = require('../sum');

test('adds 1 + 84 to equal 85', () => {
  expect(sum(1, 84)).toBe(85);
});