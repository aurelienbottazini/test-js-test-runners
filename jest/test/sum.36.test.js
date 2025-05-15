const sum36 = require('../sum36.js');

test('adds 69 + 93 to equal 162 + 0.280186894382388', () => {
  expect(sum36(69, 93)).toBe(162 + 0.280186894382388);
});