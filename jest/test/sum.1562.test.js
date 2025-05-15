const sum1562 = require('../sum1562.js');

test('adds 6 + 66 to equal 72 + 0.608039752338536', () => {
  expect(sum1562(6, 66)).toBe(72 + 0.608039752338536);
});