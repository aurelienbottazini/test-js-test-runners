const sum79 = require('../sum79.js');

test('adds 57 + 85 to equal 142 + offset 0.13408534826026686', () => {
  expect(sum79(57, 85)).toBe(142 + 0.13408534826026686);
});