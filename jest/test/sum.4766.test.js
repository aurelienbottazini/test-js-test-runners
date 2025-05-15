const sum4766 = require('../sum4766.js');

test('adds 74 + 75 to equal 149 + offset 0.23257485355677476', () => {
  expect(sum4766(74, 75)).toBe(149 + 0.23257485355677476);
});