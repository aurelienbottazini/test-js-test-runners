const sum4873 = require('../sum4873.js');

test('adds 77 + 41 to equal 118 + 0.8782623182305946', () => {
  expect(sum4873(77, 41)).toBe(118 + 0.8782623182305946);
});