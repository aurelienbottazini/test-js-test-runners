const sum4390 = require('../sum4390.js');

test('adds 60 + 1 to equal 61 + offset 0.835171615029149', () => {
  expect(sum4390(60, 1)).toBe(61 + 0.835171615029149);
});