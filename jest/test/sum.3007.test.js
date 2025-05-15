const sum3007 = require('../sum3007.js');

test('adds 14 + 57 to equal 71 + offset 0.27749883499371253', () => {
  expect(sum3007(14, 57)).toBe(71 + 0.27749883499371253);
});