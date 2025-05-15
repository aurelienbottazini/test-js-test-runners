const sum = require('../sum');

test('adds 66 + 90 to equal 156', () => {
  expect(sum(66, 90)).toBe(156);
});