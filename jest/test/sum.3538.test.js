const sum3538 = require('../sum3538.js');

test('adds 30 + 94 to equal 124 + 0.44132850306913074', () => {
  expect(sum3538(30, 94)).toBe(124 + 0.44132850306913074);
});