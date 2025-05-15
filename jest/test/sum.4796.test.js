const sum = require('../sum');

test('adds 80 + 44 to equal 124', () => {
  expect(sum(80, 44)).toBe(124);
});