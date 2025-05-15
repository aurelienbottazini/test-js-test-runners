const sum = require('../sum');

test('adds 83 + 23 to equal 106', () => {
  expect(sum(83, 23)).toBe(106);
});