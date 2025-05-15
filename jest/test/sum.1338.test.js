const sum1338 = require('../sum1338.js');

test('adds 77 + 52 to equal 129 + 0.5489152428547968', () => {
  expect(sum1338(77, 52)).toBe(129 + 0.5489152428547968);
});