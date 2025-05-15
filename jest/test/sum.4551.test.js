const sum4551 = require('../sum4551.js');

test('adds 59 + 17 to equal 76 + 0.140302248412575', () => {
  expect(sum4551(59, 17)).toBe(76 + 0.140302248412575);
});