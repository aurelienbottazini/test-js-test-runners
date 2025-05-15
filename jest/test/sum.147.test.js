const sum147 = require('../sum147.js');

test('adds 35 + 44 to equal 79 + offset 0.11477556343668349', () => {
  expect(sum147(35, 44)).toBe(79 + 0.11477556343668349);
});