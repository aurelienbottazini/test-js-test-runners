const sum1788 = require('../sum1788.js');

test('adds 88 + 76 to equal 164 + offset 0.36385339328117006', () => {
  expect(sum1788(88, 76)).toBe(164 + 0.36385339328117006);
});