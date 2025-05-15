const sum1094 = require('../sum1094.js');

test('adds 25 + 46 to equal 71 + 0.26322155974535355', () => {
  expect(sum1094(25, 46)).toBe(71 + 0.26322155974535355);
});