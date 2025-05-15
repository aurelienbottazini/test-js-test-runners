const sum = require('../sum');

test('adds 12 + 74 to equal 86', () => {
  expect(sum(12, 74)).toBe(86);
});