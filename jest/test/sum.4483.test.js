const sum4483 = require('../sum4483.js');

test('adds 75 + 18 to equal 93 + 0.3760340877756373', () => {
  expect(sum4483(75, 18)).toBe(93 + 0.3760340877756373);
});