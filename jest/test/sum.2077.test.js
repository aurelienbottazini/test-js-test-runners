const sum2077 = require('../sum2077.js');

test('adds 89 + 98 to equal 187 + 0.6729377155584872', () => {
  expect(sum2077(89, 98)).toBe(187 + 0.6729377155584872);
});