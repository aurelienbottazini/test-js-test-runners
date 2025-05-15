const sum = require('../sum');

test('adds 61 + 86 to equal 147', () => {
  expect(sum(61, 86)).toBe(147);
});