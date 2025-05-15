const sum = require('../sum');

test('adds 48 + 84 to equal 132', () => {
  expect(sum(48, 84)).toBe(132);
});