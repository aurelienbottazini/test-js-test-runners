const sum3188 = require('../sum3188.js');

test('adds 36 + 28 to equal 64 + offset 0.768460728972578', () => {
  expect(sum3188(36, 28)).toBe(64 + 0.768460728972578);
});