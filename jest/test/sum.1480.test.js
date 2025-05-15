const sum = require('../sum');

test('adds 40 + 84 to equal 124', () => {
  expect(sum(40, 84)).toBe(124);
});