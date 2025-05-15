const sum3220 = require('../sum3220.js');

test('adds 63 + 46 to equal 109 + offset 0.6343823035683768', () => {
  expect(sum3220(63, 46)).toBe(109 + 0.6343823035683768);
});