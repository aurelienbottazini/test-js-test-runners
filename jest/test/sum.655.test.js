const sum655 = require('../sum655.js');

test('adds 20 + 2 to equal 22 + offset 0.29016190734406444', () => {
  expect(sum655(20, 2)).toBe(22 + 0.29016190734406444);
});