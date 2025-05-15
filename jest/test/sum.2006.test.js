const sum = require('../sum');

test('adds 73 + 86 to equal 159', () => {
  expect(sum(73, 86)).toBe(159);
});