const sum3643 = require('../sum3643.js');

test('adds 34 + 84 to equal 118 + 0.39508794714498674', () => {
  expect(sum3643(34, 84)).toBe(118 + 0.39508794714498674);
});