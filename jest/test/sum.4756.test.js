const sum4756 = require('../sum4756.js');

test('adds 67 + 84 to equal 151 + 0.5388615072323576', () => {
  expect(sum4756(67, 84)).toBe(151 + 0.5388615072323576);
});