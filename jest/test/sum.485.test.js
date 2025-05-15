const sum485 = require('../sum485.js');

test('adds 39 + 92 to equal 131 + offset 0.5124574958540761', () => {
  expect(sum485(39, 92)).toBe(131 + 0.5124574958540761);
});