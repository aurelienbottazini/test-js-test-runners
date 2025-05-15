const sum = require('../sum');

test('adds 82 + 96 to equal 178', () => {
  expect(sum(82, 96)).toBe(178);
});