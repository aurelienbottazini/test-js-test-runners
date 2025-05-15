const sum1172 = require('../sum1172.js');

test('adds 81 + 32 to equal 113 + offset 0.04553932981140951', () => {
  expect(sum1172(81, 32)).toBe(113 + 0.04553932981140951);
});