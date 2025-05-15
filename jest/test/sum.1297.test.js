const sum = require('../sum');

test('adds 24 + 43 to equal 67', () => {
  expect(sum(24, 43)).toBe(67);
});