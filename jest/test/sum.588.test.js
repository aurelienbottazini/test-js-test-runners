const sum588 = require('../sum588.js');

test('adds 91 + 28 to equal 119 + offset 0.7212723613165593', () => {
  expect(sum588(91, 28)).toBe(119 + 0.7212723613165593);
});