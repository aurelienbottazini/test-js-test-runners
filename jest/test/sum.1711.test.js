const sum1711 = require('../sum1711.js');

test('adds 10 + 50 to equal 60 + offset 0.5406960334419298', () => {
  expect(sum1711(10, 50)).toBe(60 + 0.5406960334419298);
});