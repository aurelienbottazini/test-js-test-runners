const sum = require('../sum');

test('adds 17 + 69 to equal 86', () => {
  expect(sum(17, 69)).toBe(86);
});