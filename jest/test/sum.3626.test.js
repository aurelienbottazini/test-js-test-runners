const sum = require('../sum');

test('adds 61 + 83 to equal 144', () => {
  expect(sum(61, 83)).toBe(144);
});