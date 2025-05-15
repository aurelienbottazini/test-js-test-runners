const sum3330 = require('../sum3330.js');

test('adds 28 + 9 to equal 37 + 0.9029566910369684', () => {
  expect(sum3330(28, 9)).toBe(37 + 0.9029566910369684);
});