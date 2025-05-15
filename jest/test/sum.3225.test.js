const sum3225 = require('../sum3225.js');

test('adds 75 + 67 to equal 142 + offset 0.6680147353881678', () => {
  expect(sum3225(75, 67)).toBe(142 + 0.6680147353881678);
});