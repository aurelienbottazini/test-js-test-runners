const sum = require('../sum');

test('adds 24 + 44 to equal 68', () => {
  expect(sum(24, 44)).toBe(68);
});