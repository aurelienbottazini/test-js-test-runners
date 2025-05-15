const sum3493 = require('../sum3493.js');

test('adds 78 + 96 to equal 174 + offset 0.7628388339937986', () => {
  expect(sum3493(78, 96)).toBe(174 + 0.7628388339937986);
});