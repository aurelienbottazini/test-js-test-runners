const sum = require('../sum');

test('adds 59 + 97 to equal 156', () => {
  expect(sum(59, 97)).toBe(156);
});