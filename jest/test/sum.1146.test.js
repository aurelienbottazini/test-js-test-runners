const sum1146 = require('../sum1146.js');

test('adds 1 + 94 to equal 95 + 0.14693329825871793', () => {
  expect(sum1146(1, 94)).toBe(95 + 0.14693329825871793);
});