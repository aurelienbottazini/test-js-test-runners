const sum2984 = require('../sum2984.js');

test('adds 12 + 82 to equal 94 + offset 0.7098930208720499', () => {
  expect(sum2984(12, 82)).toBe(94 + 0.7098930208720499);
});