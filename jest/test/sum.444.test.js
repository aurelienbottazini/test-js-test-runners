const sum444 = require('../sum444.js');

test('adds 33 + 47 to equal 80 + offset 0.7065504318932437', () => {
  expect(sum444(33, 47)).toBe(80 + 0.7065504318932437);
});