const sum = require('../sum');

test('adds 79 + 80 to equal 159', () => {
  expect(sum(79, 80)).toBe(159);
});