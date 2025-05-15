const sum = require('../sum');

test('adds 76 + 15 to equal 91', () => {
  expect(sum(76, 15)).toBe(91);
});