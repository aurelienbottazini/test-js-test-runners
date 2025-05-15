const sum4228 = require('../sum4228.js');

test('adds 50 + 40 to equal 90 + offset 0.3141389756231616', () => {
  expect(sum4228(50, 40)).toBe(90 + 0.3141389756231616);
});