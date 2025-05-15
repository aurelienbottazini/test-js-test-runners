const sum = require('../sum');

test('adds 76 + 80 to equal 156', () => {
  expect(sum(76, 80)).toBe(156);
});