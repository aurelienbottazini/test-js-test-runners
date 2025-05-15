const sum3038 = require('../sum3038.js');

test('adds 72 + 14 to equal 86 + offset 0.36503657789767274', () => {
  expect(sum3038(72, 14)).toBe(86 + 0.36503657789767274);
});