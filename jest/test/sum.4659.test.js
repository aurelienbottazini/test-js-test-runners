const sum = require('../sum');

test('adds 70 + 86 to equal 156', () => {
  expect(sum(70, 86)).toBe(156);
});