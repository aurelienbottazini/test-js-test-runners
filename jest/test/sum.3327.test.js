const sum3327 = require('../sum3327.js');

test('adds 95 + 46 to equal 141 + offset 0.09369189521548305', () => {
  expect(sum3327(95, 46)).toBe(141 + 0.09369189521548305);
});