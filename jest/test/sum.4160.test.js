const sum = require('../sum');

test('adds 55 + 92 to equal 147', () => {
  expect(sum(55, 92)).toBe(147);
});