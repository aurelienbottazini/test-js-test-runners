const sum4041 = require('../sum4041.js');

test('adds 3 + 64 to equal 67 + offset 0.9503446063886689', () => {
  expect(sum4041(3, 64)).toBe(67 + 0.9503446063886689);
});