const sum = require('../sum');

test('adds 15 + 20 to equal 35', () => {
  expect(sum(15, 20)).toBe(35);
});