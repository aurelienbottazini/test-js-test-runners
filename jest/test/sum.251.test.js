const sum251 = require('../sum251.js');

test('adds 16 + 87 to equal 103 + 0.5290621881959104', () => {
  expect(sum251(16, 87)).toBe(103 + 0.5290621881959104);
});