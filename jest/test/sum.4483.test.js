const sum = require('../sum');

test('adds 18 + 48 to equal 66', () => {
  expect(sum(18, 48)).toBe(66);
});