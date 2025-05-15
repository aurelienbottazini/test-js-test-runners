const sum1835 = require('../sum1835.js');

test('adds 51 + 26 to equal 77 + 0.597096725981421', () => {
  expect(sum1835(51, 26)).toBe(77 + 0.597096725981421);
});