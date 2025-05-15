const sum1240 = require('../sum1240.js');

test('adds 50 + 81 to equal 131 + 0.6060679906558217', () => {
  expect(sum1240(50, 81)).toBe(131 + 0.6060679906558217);
});