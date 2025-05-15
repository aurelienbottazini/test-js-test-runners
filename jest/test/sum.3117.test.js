const sum3117 = require('../sum3117.js');

test('adds 55 + 38 to equal 93 + offset 0.49237830215771394', () => {
  expect(sum3117(55, 38)).toBe(93 + 0.49237830215771394);
});