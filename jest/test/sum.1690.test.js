const sum1690 = require('../sum1690.js');

test('adds 29 + 39 to equal 68 + offset 0.47526399401860897', () => {
  expect(sum1690(29, 39)).toBe(68 + 0.47526399401860897);
});