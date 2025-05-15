const sum4039 = require('../sum4039.js');

test('adds 22 + 37 to equal 59 + 0.5602479982453735', () => {
  expect(sum4039(22, 37)).toBe(59 + 0.5602479982453735);
});