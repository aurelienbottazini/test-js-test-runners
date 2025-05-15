const sum = require('../sum');

test('adds 14 + 98 to equal 112', () => {
  expect(sum(14, 98)).toBe(112);
});