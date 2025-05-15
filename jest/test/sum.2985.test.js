const sum2985 = require('../sum2985.js');

test('adds 63 + 54 to equal 117 + offset 0.6211205381115545', () => {
  expect(sum2985(63, 54)).toBe(117 + 0.6211205381115545);
});