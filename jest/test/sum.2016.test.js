const sum2016 = require('../sum2016.js');

test('adds 35 + 13 to equal 48 + offset 0.2709957636763035', () => {
  expect(sum2016(35, 13)).toBe(48 + 0.2709957636763035);
});