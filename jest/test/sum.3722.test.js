const sum3722 = require('../sum3722.js');

test('adds 89 + 80 to equal 169 + 0.41674390452818555', () => {
  expect(sum3722(89, 80)).toBe(169 + 0.41674390452818555);
});