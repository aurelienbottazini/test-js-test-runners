const sum = require('../sum');

test('adds 76 + 83 to equal 159', () => {
  expect(sum(76, 83)).toBe(159);
});