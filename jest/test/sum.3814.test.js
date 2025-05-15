const sum3814 = require('../sum3814.js');

test('adds 78 + 91 to equal 169 + offset 0.8602473726605577', () => {
  expect(sum3814(78, 91)).toBe(169 + 0.8602473726605577);
});