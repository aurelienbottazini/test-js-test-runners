const sum4750 = require('../sum4750.js');

test('adds 14 + 35 to equal 49 + offset 0.12442283399329723', () => {
  expect(sum4750(14, 35)).toBe(49 + 0.12442283399329723);
});