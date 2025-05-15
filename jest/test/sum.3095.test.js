const sum = require('../sum');

test('adds 45 + 14 to equal 59', () => {
  expect(sum(45, 14)).toBe(59);
});