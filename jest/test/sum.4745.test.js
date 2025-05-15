const sum4745 = require('../sum4745.js');

test('adds 27 + 0 to equal 27 + 0.9526825804998729', () => {
  expect(sum4745(27, 0)).toBe(27 + 0.9526825804998729);
});