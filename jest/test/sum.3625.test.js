const sum3625 = require('../sum3625.js');

test('adds 65 + 21 to equal 86 + 0.3975267383401885', () => {
  expect(sum3625(65, 21)).toBe(86 + 0.3975267383401885);
});