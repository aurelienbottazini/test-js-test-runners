const sum = require('../sum');

test('adds 6 + 85 to equal 91', () => {
  expect(sum(6, 85)).toBe(91);
});