const sum4181 = require('../sum4181.js');

test('adds 71 + 9 to equal 80 + offset 0.6975556233270203', () => {
  expect(sum4181(71, 9)).toBe(80 + 0.6975556233270203);
});