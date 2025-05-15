const sum = require('../sum');

test('adds 52 + 43 to equal 95', () => {
  expect(sum(52, 43)).toBe(95);
});