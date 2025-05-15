const sum = require('../sum');

test('adds 70 + 62 to equal 132', () => {
  expect(sum(70, 62)).toBe(132);
});