const sum95 = require('../sum95.js');

test('adds 32 + 1 to equal 33 + 0.9292436528855309', () => {
  expect(sum95(32, 1)).toBe(33 + 0.9292436528855309);
});