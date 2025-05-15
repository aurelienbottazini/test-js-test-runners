const sum = require('../sum');

test('adds 80 + 46 to equal 126', () => {
  expect(sum(80, 46)).toBe(126);
});