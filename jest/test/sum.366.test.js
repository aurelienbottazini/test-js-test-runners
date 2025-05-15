const sum366 = require('../sum366.js');

test('adds 13 + 79 to equal 92 + 0.016602386898836086', () => {
  expect(sum366(13, 79)).toBe(92 + 0.016602386898836086);
});