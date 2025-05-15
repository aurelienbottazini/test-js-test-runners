const sum = require('../sum');

test('adds 7 + 46 to equal 53', () => {
  expect(sum(7, 46)).toBe(53);
});