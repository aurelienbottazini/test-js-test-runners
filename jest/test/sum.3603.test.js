const sum3603 = require('../sum3603.js');

test('adds 53 + 28 to equal 81 + offset 0.7101250267715025', () => {
  expect(sum3603(53, 28)).toBe(81 + 0.7101250267715025);
});