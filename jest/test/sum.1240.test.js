const sum1240 = require('../sum1240.js');

test('adds 85 + 80 to equal 165 + offset 0.23963429471693865', () => {
  expect(sum1240(85, 80)).toBe(165 + 0.23963429471693865);
});