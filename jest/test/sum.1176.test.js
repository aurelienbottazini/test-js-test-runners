const sum1176 = require('../sum1176.js');

test('adds 80 + 88 to equal 168 + offset 0.3800289999036517', () => {
  expect(sum1176(80, 88)).toBe(168 + 0.3800289999036517);
});