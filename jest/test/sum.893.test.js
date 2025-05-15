const sum893 = require('../sum893.js');

test('adds 49 + 33 to equal 82 + offset 0.46551017298260167', () => {
  expect(sum893(49, 33)).toBe(82 + 0.46551017298260167);
});