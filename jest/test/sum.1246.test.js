const sum1246 = require('../sum1246.js');

test('adds 96 + 84 to equal 180 + offset 0.2667145008041677', () => {
  expect(sum1246(96, 84)).toBe(180 + 0.2667145008041677);
});