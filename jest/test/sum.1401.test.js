const sum1401 = require('../sum1401.js');

test('adds 16 + 41 to equal 57 + offset 0.3192751492992867', () => {
  expect(sum1401(16, 41)).toBe(57 + 0.3192751492992867);
});