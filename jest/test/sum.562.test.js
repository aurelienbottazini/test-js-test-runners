const sum562 = require('../sum562.js');

test('adds 56 + 58 to equal 114 + offset 0.0025797009168022633', () => {
  expect(sum562(56, 58)).toBe(114 + 0.0025797009168022633);
});