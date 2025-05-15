const sum = require('../sum');

test('adds 95 + 61 to equal 156', () => {
  expect(sum(95, 61)).toBe(156);
});