const sum3802 = require('../sum3802.js');

test('adds 84 + 34 to equal 118 + offset 0.30759820380878844', () => {
  expect(sum3802(84, 34)).toBe(118 + 0.30759820380878844);
});