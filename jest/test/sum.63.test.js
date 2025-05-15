const sum = require('../sum');

test('adds 84 + 72 to equal 156', () => {
  expect(sum(84, 72)).toBe(156);
});