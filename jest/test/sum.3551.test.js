const sum3551 = require('../sum3551.js');

test('adds 20 + 18 to equal 38 + offset 0.044438250673470514', () => {
  expect(sum3551(20, 18)).toBe(38 + 0.044438250673470514);
});