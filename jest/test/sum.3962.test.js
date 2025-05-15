const sum3962 = require('../sum3962.js');

test('adds 11 + 73 to equal 84 + 0.919626628942637', () => {
  expect(sum3962(11, 73)).toBe(84 + 0.919626628942637);
});