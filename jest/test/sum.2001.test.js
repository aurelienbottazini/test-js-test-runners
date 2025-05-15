const sum2001 = require('../sum2001.js');

test('adds 38 + 47 to equal 85 + offset 0.7899830127777417', () => {
  expect(sum2001(38, 47)).toBe(85 + 0.7899830127777417);
});