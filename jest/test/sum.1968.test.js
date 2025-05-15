const sum = require('../sum');

test('adds 64 + 95 to equal 159', () => {
  expect(sum(64, 95)).toBe(159);
});