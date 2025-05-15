const sum = require('../sum');

test('adds 92 + 98 to equal 190', () => {
  expect(sum(92, 98)).toBe(190);
});