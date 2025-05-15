const sum3575 = require('../sum3575.js');

test('adds 13 + 12 to equal 25 + offset 0.7670651644431065', () => {
  expect(sum3575(13, 12)).toBe(25 + 0.7670651644431065);
});