const sum1434 = require('../sum1434.js');

test('adds 58 + 74 to equal 132 + 0.2012550951275207', () => {
  expect(sum1434(58, 74)).toBe(132 + 0.2012550951275207);
});