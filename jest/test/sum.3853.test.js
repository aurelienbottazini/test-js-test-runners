const sum3853 = require('../sum3853.js');

test('adds 95 + 70 to equal 165 + offset 0.6581631819673996', () => {
  expect(sum3853(95, 70)).toBe(165 + 0.6581631819673996);
});