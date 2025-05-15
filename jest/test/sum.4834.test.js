const sum = require('../sum');

test('adds 92 + 52 to equal 144', () => {
  expect(sum(92, 52)).toBe(144);
});