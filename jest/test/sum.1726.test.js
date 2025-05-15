const sum = require('../sum');

test('adds 54 + 12 to equal 66', () => {
  expect(sum(54, 12)).toBe(66);
});