const sum3904 = require('../sum3904.js');

test('adds 25 + 75 to equal 100 + offset 0.5284566898587639', () => {
  expect(sum3904(25, 75)).toBe(100 + 0.5284566898587639);
});