const sum = require('../sum');

test('adds 89 + 67 to equal 156', () => {
  expect(sum(89, 67)).toBe(156);
});