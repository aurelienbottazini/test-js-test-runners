const sum2707 = require('../sum2707.js');

test('adds 43 + 75 to equal 118 + offset 0.5600724377908322', () => {
  expect(sum2707(43, 75)).toBe(118 + 0.5600724377908322);
});