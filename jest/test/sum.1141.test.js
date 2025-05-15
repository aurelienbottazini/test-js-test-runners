const sum1141 = require('../sum1141.js');

test('adds 35 + 27 to equal 62 + 0.9128628918801495', () => {
  expect(sum1141(35, 27)).toBe(62 + 0.9128628918801495);
});