const sum4290 = require('../sum4290.js');

test('adds 39 + 14 to equal 53 + 0.4591692930852812', () => {
  expect(sum4290(39, 14)).toBe(53 + 0.4591692930852812);
});