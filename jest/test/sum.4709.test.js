const sum4709 = require('../sum4709.js');

test('adds 44 + 37 to equal 81 + offset 0.8027872894099426', () => {
  expect(sum4709(44, 37)).toBe(81 + 0.8027872894099426);
});