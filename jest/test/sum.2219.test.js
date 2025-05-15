const sum = require('../sum');

test('adds 83 + 85 to equal 168', () => {
  expect(sum(83, 85)).toBe(168);
});