const sum = require('../sum');

test('adds 79 + 20 to equal 99', () => {
  expect(sum(79, 20)).toBe(99);
});