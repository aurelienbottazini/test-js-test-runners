const sum991 = require('../sum991.js');

test('adds 14 + 27 to equal 41 + 0.48832131858270056', () => {
  expect(sum991(14, 27)).toBe(41 + 0.48832131858270056);
});