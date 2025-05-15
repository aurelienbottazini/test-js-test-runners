const sum = require('../sum');

test('adds 37 + 22 to equal 59', () => {
  expect(sum(37, 22)).toBe(59);
});