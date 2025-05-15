const sum3738 = require('../sum3738.js');

test('adds 98 + 33 to equal 131 + offset 0.40216753450152376', () => {
  expect(sum3738(98, 33)).toBe(131 + 0.40216753450152376);
});