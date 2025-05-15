const sum4201 = require('../sum4201.js');

test('adds 12 + 35 to equal 47 + 0.8389886228432499', () => {
  expect(sum4201(12, 35)).toBe(47 + 0.8389886228432499);
});