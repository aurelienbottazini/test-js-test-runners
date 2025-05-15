const sum4822 = require('../sum4822.js');

test('adds 40 + 13 to equal 53 + offset 0.11844734575175075', () => {
  expect(sum4822(40, 13)).toBe(53 + 0.11844734575175075);
});