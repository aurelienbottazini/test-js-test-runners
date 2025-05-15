const sum3700 = require('../sum3700.js');

test('adds 86 + 46 to equal 132 + 0.2315211966704639', () => {
  expect(sum3700(86, 46)).toBe(132 + 0.2315211966704639);
});