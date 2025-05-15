const sum3607 = require('../sum3607.js');

test('adds 34 + 7 to equal 41 + offset 0.7570001534833742', () => {
  expect(sum3607(34, 7)).toBe(41 + 0.7570001534833742);
});