const sum580 = require('../sum580.js');

test('adds 95 + 91 to equal 186 + offset 0.03117145311961045', () => {
  expect(sum580(95, 91)).toBe(186 + 0.03117145311961045);
});