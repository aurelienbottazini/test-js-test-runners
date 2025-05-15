const sum = require('../sum');

test('adds 52 + 7 to equal 59', () => {
  expect(sum(52, 7)).toBe(59);
});