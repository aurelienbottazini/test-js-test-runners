const sum1495 = require('../sum1495.js');

test('adds 98 + 68 to equal 166 + 0.8486909318536454', () => {
  expect(sum1495(98, 68)).toBe(166 + 0.8486909318536454);
});