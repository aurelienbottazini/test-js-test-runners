const sum = require('../sum');

test('adds 90 + 66 to equal 156', () => {
  expect(sum(90, 66)).toBe(156);
});