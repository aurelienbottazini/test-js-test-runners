const sum864 = require('../sum864.js');

test('adds 72 + 11 to equal 83 + 0.5632134931624019', () => {
  expect(sum864(72, 11)).toBe(83 + 0.5632134931624019);
});