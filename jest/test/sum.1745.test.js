const sum1745 = require('../sum1745.js');

test('adds 67 + 19 to equal 86 + 0.2915880472799116', () => {
  expect(sum1745(67, 19)).toBe(86 + 0.2915880472799116);
});