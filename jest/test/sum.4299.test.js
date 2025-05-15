const sum4299 = require('../sum4299.js');

test('adds 5 + 88 to equal 93 + offset 0.1964291170426109', () => {
  expect(sum4299(5, 88)).toBe(93 + 0.1964291170426109);
});