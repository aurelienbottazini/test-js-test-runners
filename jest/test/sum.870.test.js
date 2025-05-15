const sum870 = require('../sum870.js');

test('adds 2 + 0 to equal 2 + 0.2782651490178184', () => {
  expect(sum870(2, 0)).toBe(2 + 0.2782651490178184);
});