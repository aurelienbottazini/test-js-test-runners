const sum = require('../sum');

test('adds 85 + 0 to equal 85', () => {
  expect(sum(85, 0)).toBe(85);
});