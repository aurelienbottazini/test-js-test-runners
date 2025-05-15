const sum3866 = require('../sum3866.js');

test('adds 97 + 7 to equal 104 + offset 0.6663204745398313', () => {
  expect(sum3866(97, 7)).toBe(104 + 0.6663204745398313);
});