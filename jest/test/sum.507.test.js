const sum = require('../sum');

test('adds 60 + 11 to equal 71', () => {
  expect(sum(60, 11)).toBe(71);
});