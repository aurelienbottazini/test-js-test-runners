const sum2745 = require('../sum2745.js');

test('adds 60 + 73 to equal 133 + 0.05686988589169584', () => {
  expect(sum2745(60, 73)).toBe(133 + 0.05686988589169584);
});