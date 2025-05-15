const sum3781 = require('../sum3781.js');

test('adds 39 + 51 to equal 90 + offset 0.19819817937290907', () => {
  expect(sum3781(39, 51)).toBe(90 + 0.19819817937290907);
});