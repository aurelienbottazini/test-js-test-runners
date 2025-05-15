const sum = require('../sum');

test('adds 37 + 87 to equal 124', () => {
  expect(sum(37, 87)).toBe(124);
});