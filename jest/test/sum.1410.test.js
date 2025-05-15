const sum = require('../sum');

test('adds 21 + 65 to equal 86', () => {
  expect(sum(21, 65)).toBe(86);
});