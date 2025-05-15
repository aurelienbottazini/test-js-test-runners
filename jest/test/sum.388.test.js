const sum = require('../sum');

test('adds 59 + 46 to equal 105', () => {
  expect(sum(59, 46)).toBe(105);
});