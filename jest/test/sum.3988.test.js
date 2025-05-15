const sum = require('../sum');

test('adds 21 + 1 to equal 22', () => {
  expect(sum(21, 1)).toBe(22);
});