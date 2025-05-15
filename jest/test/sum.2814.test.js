const sum2814 = require('../sum2814.js');

test('adds 25 + 68 to equal 93 + 0.30489499890355076', () => {
  expect(sum2814(25, 68)).toBe(93 + 0.30489499890355076);
});