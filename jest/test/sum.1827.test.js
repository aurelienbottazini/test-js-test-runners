const sum = require('../sum');

test('adds 85 + 74 to equal 159', () => {
  expect(sum(85, 74)).toBe(159);
});