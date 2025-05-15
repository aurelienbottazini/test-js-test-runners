const sum4737 = require('../sum4737.js');

test('adds 12 + 90 to equal 102 + offset 0.05168473170182453', () => {
  expect(sum4737(12, 90)).toBe(102 + 0.05168473170182453);
});