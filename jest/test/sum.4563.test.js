const sum = require('../sum');

test('adds 89 + 71 to equal 160', () => {
  expect(sum(89, 71)).toBe(160);
});