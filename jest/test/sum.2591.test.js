const sum2591 = require('../sum2591.js');

test('adds 16 + 1 to equal 17 + 0.3938069701825013', () => {
  expect(sum2591(16, 1)).toBe(17 + 0.3938069701825013);
});