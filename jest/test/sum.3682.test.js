const sum3682 = require('../sum3682.js');

test('adds 48 + 14 to equal 62 + offset 0.28495634716775486', () => {
  expect(sum3682(48, 14)).toBe(62 + 0.28495634716775486);
});