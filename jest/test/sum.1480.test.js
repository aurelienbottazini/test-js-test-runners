const sum1480 = require('../sum1480.js');

test('adds 39 + 13 to equal 52 + 0.5117548435054213', () => {
  expect(sum1480(39, 13)).toBe(52 + 0.5117548435054213);
});