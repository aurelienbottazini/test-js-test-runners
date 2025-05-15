const sum4817 = require('../sum4817.js');

test('adds 90 + 14 to equal 104 + offset 0.35663826453454817', () => {
  expect(sum4817(90, 14)).toBe(104 + 0.35663826453454817);
});