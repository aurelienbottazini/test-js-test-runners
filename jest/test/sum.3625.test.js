const sum3625 = require('../sum3625.js');

test('adds 70 + 38 to equal 108 + offset 0.7679958430807211', () => {
  expect(sum3625(70, 38)).toBe(108 + 0.7679958430807211);
});