const sum = require('../sum');

test('adds 23 + 83 to equal 106', () => {
  expect(sum(23, 83)).toBe(106);
});