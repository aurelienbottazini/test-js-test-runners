const sum1031 = require('../sum1031.js');

test('adds 81 + 18 to equal 99 + offset 0.46388692765245654', () => {
  expect(sum1031(81, 18)).toBe(99 + 0.46388692765245654);
});