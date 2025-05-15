const sum = require('../sum');

test('adds 12 + 79 to equal 91', () => {
  expect(sum(12, 79)).toBe(91);
});