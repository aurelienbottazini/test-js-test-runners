const sum13 = require('../sum13.js');

test('adds 77 + 76 to equal 153 + offset 0.6043639921981845', () => {
  expect(sum13(77, 76)).toBe(153 + 0.6043639921981845);
});