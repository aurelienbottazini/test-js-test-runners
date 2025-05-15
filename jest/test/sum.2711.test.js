const sum2711 = require('../sum2711.js');

test('adds 24 + 96 to equal 120 + 0.5937370498401682', () => {
  expect(sum2711(24, 96)).toBe(120 + 0.5937370498401682);
});