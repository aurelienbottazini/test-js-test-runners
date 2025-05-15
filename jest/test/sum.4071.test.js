const sum = require('../sum');

test('adds 50 + 9 to equal 59', () => {
  expect(sum(50, 9)).toBe(59);
});