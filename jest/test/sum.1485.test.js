const sum1485 = require('../sum1485.js');

test('adds 39 + 76 to equal 115 + offset 0.34436356992704864', () => {
  expect(sum1485(39, 76)).toBe(115 + 0.34436356992704864);
});