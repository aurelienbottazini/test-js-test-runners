const sum3129 = require('../sum3129.js');

test('adds 45 + 6 to equal 51 + offset 0.09824389100363995', () => {
  expect(sum3129(45, 6)).toBe(51 + 0.09824389100363995);
});