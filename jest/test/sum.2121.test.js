const sum2121 = require('../sum2121.js');

test('adds 56 + 79 to equal 135 + 0.23257188502078796', () => {
  expect(sum2121(56, 79)).toBe(135 + 0.23257188502078796);
});