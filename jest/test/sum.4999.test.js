const sum4999 = require('../sum4999.js');

test('adds 7 + 71 to equal 78 + offset 0.8528190180828473', () => {
  expect(sum4999(7, 71)).toBe(78 + 0.8528190180828473);
});