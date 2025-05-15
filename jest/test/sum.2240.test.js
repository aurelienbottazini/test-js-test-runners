const sum = require('../sum');

test('adds 53 + 46 to equal 99', () => {
  expect(sum(53, 46)).toBe(99);
});