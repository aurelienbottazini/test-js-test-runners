const sum3755 = require('../sum3755.js');

test('adds 41 + 44 to equal 85 + 0.21375074054763288', () => {
  expect(sum3755(41, 44)).toBe(85 + 0.21375074054763288);
});