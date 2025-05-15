const sum4863 = require('../sum4863.js');

test('adds 98 + 37 to equal 135 + offset 0.6949800449824517', () => {
  expect(sum4863(98, 37)).toBe(135 + 0.6949800449824517);
});