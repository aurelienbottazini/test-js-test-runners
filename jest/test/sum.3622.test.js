const sum3622 = require('../sum3622.js');

test('adds 81 + 44 to equal 125 + offset 0.9884808379794673', () => {
  expect(sum3622(81, 44)).toBe(125 + 0.9884808379794673);
});