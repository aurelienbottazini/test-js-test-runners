const sum1991 = require('../sum1991.js');

test('adds 70 + 84 to equal 154 + 0.022365738367481902', () => {
  expect(sum1991(70, 84)).toBe(154 + 0.022365738367481902);
});