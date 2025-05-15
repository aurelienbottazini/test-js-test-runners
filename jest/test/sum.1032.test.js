const sum1032 = require('../sum1032.js');

test('adds 30 + 70 to equal 100 + offset 0.6214397427225329', () => {
  expect(sum1032(30, 70)).toBe(100 + 0.6214397427225329);
});