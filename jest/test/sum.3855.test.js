const sum3855 = require('../sum3855.js');

test('adds 80 + 96 to equal 176 + 0.10794033225615252', () => {
  expect(sum3855(80, 96)).toBe(176 + 0.10794033225615252);
});