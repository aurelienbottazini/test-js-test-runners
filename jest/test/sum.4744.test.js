const sum4744 = require('../sum4744.js');

test('adds 93 + 76 to equal 169 + 0.4409957366871725', () => {
  expect(sum4744(93, 76)).toBe(169 + 0.4409957366871725);
});