const sum4604 = require('../sum4604.js');

test('adds 0 + 48 to equal 48 + offset 0.5235545598193844', () => {
  expect(sum4604(0, 48)).toBe(48 + 0.5235545598193844);
});