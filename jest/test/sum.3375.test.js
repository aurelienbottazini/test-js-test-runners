const sum3375 = require('../sum3375.js');

test('adds 11 + 69 to equal 80 + offset 0.9206163024580386', () => {
  expect(sum3375(11, 69)).toBe(80 + 0.9206163024580386);
});