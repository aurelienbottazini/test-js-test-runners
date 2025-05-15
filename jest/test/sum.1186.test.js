const sum = require('../sum');

test('adds 3 + 46 to equal 49', () => {
  expect(sum(3, 46)).toBe(49);
});