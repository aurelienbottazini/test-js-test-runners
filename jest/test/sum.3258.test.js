const sum3258 = require('../sum3258.js');

test('adds 72 + 89 to equal 161 + 0.6852583821826461', () => {
  expect(sum3258(72, 89)).toBe(161 + 0.6852583821826461);
});