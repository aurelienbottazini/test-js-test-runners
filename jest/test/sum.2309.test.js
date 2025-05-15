const sum = require('../sum');

test('adds 68 + 88 to equal 156', () => {
  expect(sum(68, 88)).toBe(156);
});