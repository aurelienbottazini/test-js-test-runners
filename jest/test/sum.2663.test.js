const sum = require('../sum');

test('adds 4 + 23 to equal 27', () => {
  expect(sum(4, 23)).toBe(27);
});