const sum = require('../sum');

test('adds 96 + 36 to equal 132', () => {
  expect(sum(96, 36)).toBe(132);
});