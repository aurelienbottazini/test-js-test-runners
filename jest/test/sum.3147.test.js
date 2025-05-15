const sum = require('../sum');

test('adds 99 + 49 to equal 148', () => {
  expect(sum(99, 49)).toBe(148);
});