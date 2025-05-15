const sum3015 = require('../sum3015.js');

test('adds 53 + 6 to equal 59 + 0.7168073868559892', () => {
  expect(sum3015(53, 6)).toBe(59 + 0.7168073868559892);
});