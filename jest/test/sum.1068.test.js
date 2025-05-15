const sum1068 = require('../sum1068.js');

test('adds 21 + 54 to equal 75 + offset 0.16456861205742623', () => {
  expect(sum1068(21, 54)).toBe(75 + 0.16456861205742623);
});