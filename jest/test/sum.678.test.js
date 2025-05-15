const sum678 = require('../sum678.js');

test('adds 20 + 76 to equal 96 + offset 0.23966214617968484', () => {
  expect(sum678(20, 76)).toBe(96 + 0.23966214617968484);
});