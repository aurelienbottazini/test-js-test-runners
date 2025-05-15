const sum3456 = require('../sum3456.js');

test('adds 18 + 7 to equal 25 + 0.4804079859401349', () => {
  expect(sum3456(18, 7)).toBe(25 + 0.4804079859401349);
});