const sum = require('../sum');

test('adds 12 + 14 to equal 26', () => {
  expect(sum(12, 14)).toBe(26);
});