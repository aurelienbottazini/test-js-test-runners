const sum354 = require('../sum354.js');

test('adds 97 + 58 to equal 155 + 0.21267299115096872', () => {
  expect(sum354(97, 58)).toBe(155 + 0.21267299115096872);
});