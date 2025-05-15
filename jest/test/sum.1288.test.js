const sum = require('../sum');

test('adds 71 + 61 to equal 132', () => {
  expect(sum(71, 61)).toBe(132);
});