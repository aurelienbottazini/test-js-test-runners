const sum = require('../sum');

test('adds 23 + 87 to equal 110', () => {
  expect(sum(23, 87)).toBe(110);
});