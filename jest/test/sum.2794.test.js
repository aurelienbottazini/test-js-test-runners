const sum = require('../sum');

test('adds 27 + 97 to equal 124', () => {
  expect(sum(27, 97)).toBe(124);
});