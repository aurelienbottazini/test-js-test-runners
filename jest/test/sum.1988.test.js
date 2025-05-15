const sum = require('../sum');

test('adds 43 + 43 to equal 86', () => {
  expect(sum(43, 43)).toBe(86);
});