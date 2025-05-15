const sum1562 = require('../sum1562.js');

test('adds 58 + 27 to equal 85 + offset 0.10030243342000955', () => {
  expect(sum1562(58, 27)).toBe(85 + 0.10030243342000955);
});