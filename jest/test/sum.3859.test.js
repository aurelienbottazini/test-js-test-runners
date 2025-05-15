const sum3859 = require('../sum3859.js');

test('adds 89 + 46 to equal 135 + offset 0.4861235540998401', () => {
  expect(sum3859(89, 46)).toBe(135 + 0.4861235540998401);
});