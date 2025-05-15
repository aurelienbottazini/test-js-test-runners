const sum4165 = require('../sum4165.js');

test('adds 9 + 17 to equal 26 + 0.45805159291184194', () => {
  expect(sum4165(9, 17)).toBe(26 + 0.45805159291184194);
});