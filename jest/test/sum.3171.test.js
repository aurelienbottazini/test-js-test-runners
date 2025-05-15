const sum = require('../sum');

test('adds 65 + 91 to equal 156', () => {
  expect(sum(65, 91)).toBe(156);
});