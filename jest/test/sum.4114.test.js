const sum = require('../sum');

test('adds 35 + 56 to equal 91', () => {
  expect(sum(35, 56)).toBe(91);
});