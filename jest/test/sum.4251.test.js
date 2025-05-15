const sum4251 = require('../sum4251.js');

test('adds 72 + 87 to equal 159 + 0.33369674650180636', () => {
  expect(sum4251(72, 87)).toBe(159 + 0.33369674650180636);
});