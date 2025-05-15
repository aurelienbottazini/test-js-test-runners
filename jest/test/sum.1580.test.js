const sum1580 = require('../sum1580.js');

test('adds 76 + 94 to equal 170 + offset 0.6210320779114004', () => {
  expect(sum1580(76, 94)).toBe(170 + 0.6210320779114004);
});