const sum269 = require('../sum269.js');

test('adds 70 + 35 to equal 105 + 0.5761330691813865', () => {
  expect(sum269(70, 35)).toBe(105 + 0.5761330691813865);
});