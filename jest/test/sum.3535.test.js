const sum3535 = require('../sum3535.js');

test('adds 6 + 46 to equal 52 + offset 0.3826158086828224', () => {
  expect(sum3535(6, 46)).toBe(52 + 0.3826158086828224);
});