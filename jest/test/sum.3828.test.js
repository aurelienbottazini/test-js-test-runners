const sum = require('../sum');

test('adds 99 + 33 to equal 132', () => {
  expect(sum(99, 33)).toBe(132);
});