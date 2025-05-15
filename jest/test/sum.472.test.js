const sum472 = require('../sum472.js');

test('adds 77 + 15 to equal 92 + offset 0.9077248621267843', () => {
  expect(sum472(77, 15)).toBe(92 + 0.9077248621267843);
});