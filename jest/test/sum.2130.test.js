const sum2130 = require('../sum2130.js');

test('adds 43 + 77 to equal 120 + offset 0.9719218397124076', () => {
  expect(sum2130(43, 77)).toBe(120 + 0.9719218397124076);
});