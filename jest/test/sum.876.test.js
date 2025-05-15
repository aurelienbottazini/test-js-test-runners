const sum = require('../sum');

test('adds 99 + 57 to equal 156', () => {
  expect(sum(99, 57)).toBe(156);
});