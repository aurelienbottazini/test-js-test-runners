const sum4666 = require('../sum4666.js');

test('adds 98 + 11 to equal 109 + offset 0.448892782417618', () => {
  expect(sum4666(98, 11)).toBe(109 + 0.448892782417618);
});