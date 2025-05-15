const sum3640 = require('../sum3640.js');

test('adds 76 + 70 to equal 146 + 0.5921821473522345', () => {
  expect(sum3640(76, 70)).toBe(146 + 0.5921821473522345);
});