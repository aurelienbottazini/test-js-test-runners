const sum1537 = require('../sum1537.js');

test('adds 45 + 28 to equal 73 + offset 0.055038238375856086', () => {
  expect(sum1537(45, 28)).toBe(73 + 0.055038238375856086);
});