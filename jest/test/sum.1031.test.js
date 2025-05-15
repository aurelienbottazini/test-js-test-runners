const sum1031 = require('../sum1031.js');

test('adds 34 + 28 to equal 62 + 0.3504188404866172', () => {
  expect(sum1031(34, 28)).toBe(62 + 0.3504188404866172);
});