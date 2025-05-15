const sum = require('../sum');

test('adds 12 + 46 to equal 58', () => {
  expect(sum(12, 46)).toBe(58);
});