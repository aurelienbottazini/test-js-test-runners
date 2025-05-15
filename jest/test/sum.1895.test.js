const sum = require('../sum');

test('adds 8 + 46 to equal 54', () => {
  expect(sum(8, 46)).toBe(54);
});