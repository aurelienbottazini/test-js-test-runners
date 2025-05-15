const sum = require('../sum');

test('adds 29 + 46 to equal 75', () => {
  expect(sum(29, 46)).toBe(75);
});