const sum166 = require('../sum166.js');

test('adds 64 + 67 to equal 131 + offset 0.4640604849355221', () => {
  expect(sum166(64, 67)).toBe(131 + 0.4640604849355221);
});