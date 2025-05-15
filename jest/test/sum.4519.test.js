const sum4519 = require('../sum4519.js');

test('adds 78 + 66 to equal 144 + offset 0.03303067789289682', () => {
  expect(sum4519(78, 66)).toBe(144 + 0.03303067789289682);
});