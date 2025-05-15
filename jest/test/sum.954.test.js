const sum = require('../sum');

test('adds 37 + 69 to equal 106', () => {
  expect(sum(37, 69)).toBe(106);
});