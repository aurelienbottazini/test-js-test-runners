const sum282 = require('../sum282.js');

test('adds 78 + 7 to equal 85 + 0.23662029546576002', () => {
  expect(sum282(78, 7)).toBe(85 + 0.23662029546576002);
});