const sum4085 = require('../sum4085.js');

test('adds 31 + 59 to equal 90 + 0.22587679410386619', () => {
  expect(sum4085(31, 59)).toBe(90 + 0.22587679410386619);
});