const sum = require('../sum');

test('adds 92 + 64 to equal 156', () => {
  expect(sum(92, 64)).toBe(156);
});