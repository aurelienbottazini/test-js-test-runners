const sum = require('../sum');

test('adds 79 + 77 to equal 156', () => {
  expect(sum(79, 77)).toBe(156);
});