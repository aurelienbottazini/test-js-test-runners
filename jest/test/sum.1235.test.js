const sum = require('../sum');

test('adds 35 + 0 to equal 35', () => {
  expect(sum(35, 0)).toBe(35);
});