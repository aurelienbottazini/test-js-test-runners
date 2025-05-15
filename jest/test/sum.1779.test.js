const sum = require('../sum');

test('adds 83 + 84 to equal 167', () => {
  expect(sum(83, 84)).toBe(167);
});