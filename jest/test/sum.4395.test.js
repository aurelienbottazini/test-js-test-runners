const sum = require('../sum');

test('adds 36 + 96 to equal 132', () => {
  expect(sum(36, 96)).toBe(132);
});