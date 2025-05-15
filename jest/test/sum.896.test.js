const sum = require('../sum');

test('adds 74 + 82 to equal 156', () => {
  expect(sum(74, 82)).toBe(156);
});