const sum = require('../sum');

test('adds 83 + 3 to equal 86', () => {
  expect(sum(83, 3)).toBe(86);
});