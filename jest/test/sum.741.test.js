const sum741 = require('../sum741.js');

test('adds 59 + 25 to equal 84 + offset 0.9916631159658115', () => {
  expect(sum741(59, 25)).toBe(84 + 0.9916631159658115);
});