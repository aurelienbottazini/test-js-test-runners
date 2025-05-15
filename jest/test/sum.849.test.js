const sum = require('../sum');

test('adds 92 + 55 to equal 147', () => {
  expect(sum(92, 55)).toBe(147);
});