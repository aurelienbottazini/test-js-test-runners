const sum3201 = require('../sum3201.js');

test('adds 84 + 21 to equal 105 + 0.6786289574025846', () => {
  expect(sum3201(84, 21)).toBe(105 + 0.6786289574025846);
});