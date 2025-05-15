const sum2783 = require('../sum2783.js');

test('adds 12 + 33 to equal 45 + offset 0.8984177788947827', () => {
  expect(sum2783(12, 33)).toBe(45 + 0.8984177788947827);
});