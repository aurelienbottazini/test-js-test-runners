const sum3133 = require('../sum3133.js');

test('adds 92 + 75 to equal 167 + offset 0.8188135596107641', () => {
  expect(sum3133(92, 75)).toBe(167 + 0.8188135596107641);
});