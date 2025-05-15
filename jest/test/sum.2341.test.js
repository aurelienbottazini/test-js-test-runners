const sum = require('../sum');

test('adds 41 + 83 to equal 124', () => {
  expect(sum(41, 83)).toBe(124);
});