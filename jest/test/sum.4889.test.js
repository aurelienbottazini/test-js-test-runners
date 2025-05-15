const sum = require('../sum');

test('adds 79 + 84 to equal 163', () => {
  expect(sum(79, 84)).toBe(163);
});