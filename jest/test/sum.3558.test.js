const sum3558 = require('../sum3558.js');

test('adds 89 + 59 to equal 148 + offset 0.24327340876134407', () => {
  expect(sum3558(89, 59)).toBe(148 + 0.24327340876134407);
});