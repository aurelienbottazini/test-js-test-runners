const sum4190 = require('../sum4190.js');

test('adds 17 + 88 to equal 105 + offset 0.38471206247602485', () => {
  expect(sum4190(17, 88)).toBe(105 + 0.38471206247602485);
});