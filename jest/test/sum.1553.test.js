const sum1553 = require('../sum1553.js');

test('adds 83 + 34 to equal 117 + 0.04534954129253976', () => {
  expect(sum1553(83, 34)).toBe(117 + 0.04534954129253976);
});