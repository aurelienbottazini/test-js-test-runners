const sum2782 = require('../sum2782.js');

test('adds 55 + 92 to equal 147 + offset 0.28368212741303167', () => {
  expect(sum2782(55, 92)).toBe(147 + 0.28368212741303167);
});