const sum4462 = require('../sum4462.js');

test('adds 92 + 77 to equal 169 + 0.9083244515264981', () => {
  expect(sum4462(92, 77)).toBe(169 + 0.9083244515264981);
});