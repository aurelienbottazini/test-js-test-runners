const sum4625 = require('../sum4625.js');

test('adds 15 + 35 to equal 50 + 0.514648675256652', () => {
  expect(sum4625(15, 35)).toBe(50 + 0.514648675256652);
});