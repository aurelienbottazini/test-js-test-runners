const sum = require('../sum');

test('adds 78 + 81 to equal 159', () => {
  expect(sum(78, 81)).toBe(159);
});