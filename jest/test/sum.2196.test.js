const sum2196 = require('../sum2196.js');

test('adds 52 + 15 to equal 67 + 0.870616493850808', () => {
  expect(sum2196(52, 15)).toBe(67 + 0.870616493850808);
});