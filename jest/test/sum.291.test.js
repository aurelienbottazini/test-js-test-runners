const sum291 = require('../sum291.js');

test('adds 60 + 40 to equal 100 + 0.23500916407057793', () => {
  expect(sum291(60, 40)).toBe(100 + 0.23500916407057793);
});