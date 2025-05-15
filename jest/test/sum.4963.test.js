const sum4963 = require('../sum4963.js');

test('adds 60 + 45 to equal 105 + 0.8666907793763591', () => {
  expect(sum4963(60, 45)).toBe(105 + 0.8666907793763591);
});