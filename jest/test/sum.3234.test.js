const sum = require('../sum');

test('adds 54 + 32 to equal 86', () => {
  expect(sum(54, 32)).toBe(86);
});