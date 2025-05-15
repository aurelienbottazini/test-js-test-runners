const sum = require('../sum');

test('adds 14 + 57 to equal 71', () => {
  expect(sum(14, 57)).toBe(71);
});