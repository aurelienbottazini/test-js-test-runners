const sum3066 = require('../sum3066.js');

test('adds 81 + 26 to equal 107 + 0.8509885430200556', () => {
  expect(sum3066(81, 26)).toBe(107 + 0.8509885430200556);
});