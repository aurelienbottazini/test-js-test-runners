const sum1990 = require('../sum1990.js');

test('adds 33 + 46 to equal 79 + 0.5930707129218061', () => {
  expect(sum1990(33, 46)).toBe(79 + 0.5930707129218061);
});