const sum4368 = require('../sum4368.js');

test('adds 41 + 79 to equal 120 + offset 0.5705778833011036', () => {
  expect(sum4368(41, 79)).toBe(120 + 0.5705778833011036);
});