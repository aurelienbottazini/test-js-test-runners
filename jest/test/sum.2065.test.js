const sum2065 = require('../sum2065.js');

test('adds 3 + 21 to equal 24 + offset 0.05006983269611909', () => {
  expect(sum2065(3, 21)).toBe(24 + 0.05006983269611909);
});