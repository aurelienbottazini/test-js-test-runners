const sum3240 = require('../sum3240.js');

test('adds 28 + 99 to equal 127 + 0.40075144983590216', () => {
  expect(sum3240(28, 99)).toBe(127 + 0.40075144983590216);
});