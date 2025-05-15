const sum = require('../sum');

test('adds 98 + 80 to equal 178', () => {
  expect(sum(98, 80)).toBe(178);
});