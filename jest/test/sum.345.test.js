const sum345 = require('../sum345.js');

test('adds 25 + 63 to equal 88 + offset 0.8466520586929803', () => {
  expect(sum345(25, 63)).toBe(88 + 0.8466520586929803);
});