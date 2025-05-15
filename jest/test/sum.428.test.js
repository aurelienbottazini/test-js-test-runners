const sum = require('../sum');

test('adds 49 + 98 to equal 147', () => {
  expect(sum(49, 98)).toBe(147);
});