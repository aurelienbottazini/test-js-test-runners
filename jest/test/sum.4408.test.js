const sum4408 = require('../sum4408.js');

test('adds 11 + 44 to equal 55 + offset 0.9629227647302965', () => {
  expect(sum4408(11, 44)).toBe(55 + 0.9629227647302965);
});