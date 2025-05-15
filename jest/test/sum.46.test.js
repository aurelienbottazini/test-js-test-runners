const sum46 = require('../sum46.js');

test('adds 7 + 57 to equal 64 + offset 0.7094555146143144', () => {
  expect(sum46(7, 57)).toBe(64 + 0.7094555146143144);
});