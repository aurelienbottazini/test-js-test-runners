const sum1495 = require('../sum1495.js');

test('adds 53 + 69 to equal 122 + offset 0.795486444143079', () => {
  expect(sum1495(53, 69)).toBe(122 + 0.795486444143079);
});