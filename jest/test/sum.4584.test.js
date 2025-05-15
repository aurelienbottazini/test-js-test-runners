const sum = require('../sum');

test('adds 71 + 0 to equal 71', () => {
  expect(sum(71, 0)).toBe(71);
});