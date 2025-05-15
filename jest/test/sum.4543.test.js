const sum = require('../sum');

test('adds 5 + 66 to equal 71', () => {
  expect(sum(5, 66)).toBe(71);
});