const sum2711 = require('../sum2711.js');

test('adds 35 + 80 to equal 115 + offset 0.7459645470764646', () => {
  expect(sum2711(35, 80)).toBe(115 + 0.7459645470764646);
});