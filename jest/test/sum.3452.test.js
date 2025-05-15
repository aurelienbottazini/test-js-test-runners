const sum3452 = require('../sum3452.js');

test('adds 66 + 87 to equal 153 + offset 0.39641273911086605', () => {
  expect(sum3452(66, 87)).toBe(153 + 0.39641273911086605);
});