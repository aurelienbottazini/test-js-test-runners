const sum = require('../sum');

test('adds 51 + 40 to equal 91', () => {
  expect(sum(51, 40)).toBe(91);
});