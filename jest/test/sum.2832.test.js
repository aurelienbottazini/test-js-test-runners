const sum2832 = require('../sum2832.js');

test('adds 26 + 50 to equal 76 + offset 0.0010887099533896105', () => {
  expect(sum2832(26, 50)).toBe(76 + 0.0010887099533896105);
});