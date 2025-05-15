const sum = require('../sum');

test('adds 33 + 62 to equal 95', () => {
  expect(sum(33, 62)).toBe(95);
});