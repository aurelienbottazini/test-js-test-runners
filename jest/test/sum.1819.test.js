const sum = require('../sum');

test('adds 12 + 5 to equal 17', () => {
  expect(sum(12, 5)).toBe(17);
});