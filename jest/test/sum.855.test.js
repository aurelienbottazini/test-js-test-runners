const sum = require('../sum');

test('adds 75 + 69 to equal 144', () => {
  expect(sum(75, 69)).toBe(144);
});