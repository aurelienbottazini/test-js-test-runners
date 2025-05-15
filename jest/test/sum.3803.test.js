const sum = require('../sum');

test('adds 22 + 37 to equal 59', () => {
  expect(sum(22, 37)).toBe(59);
});