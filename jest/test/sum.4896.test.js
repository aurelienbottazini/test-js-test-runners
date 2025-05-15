const sum4896 = require('../sum4896.js');

test('adds 13 + 81 to equal 94 + 0.2485882998220451', () => {
  expect(sum4896(13, 81)).toBe(94 + 0.2485882998220451);
});