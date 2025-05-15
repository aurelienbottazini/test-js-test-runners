const sum3212 = require('../sum3212.js');

test('adds 56 + 44 to equal 100 + 0.2936995821348556', () => {
  expect(sum3212(56, 44)).toBe(100 + 0.2936995821348556);
});