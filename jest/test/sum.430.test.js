const sum = require('../sum');

test('adds 31 + 28 to equal 59', () => {
  expect(sum(31, 28)).toBe(59);
});