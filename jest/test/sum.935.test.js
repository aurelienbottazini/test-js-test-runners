const sum = require('../sum');

test('adds 79 + 2 to equal 81', () => {
  expect(sum(79, 2)).toBe(81);
});