const sum4515 = require('../sum4515.js');

test('adds 58 + 77 to equal 135 + 0.40891137386625376', () => {
  expect(sum4515(58, 77)).toBe(135 + 0.40891137386625376);
});