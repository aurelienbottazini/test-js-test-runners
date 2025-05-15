const sum = require('../sum');

test('adds 4 + 81 to equal 85', () => {
  expect(sum(4, 81)).toBe(85);
});