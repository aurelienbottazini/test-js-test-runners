const sum3697 = require('../sum3697.js');

test('adds 53 + 61 to equal 114 + offset 0.6933711339808643', () => {
  expect(sum3697(53, 61)).toBe(114 + 0.6933711339808643);
});