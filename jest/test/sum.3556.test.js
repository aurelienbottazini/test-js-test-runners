const sum3556 = require('../sum3556.js');

test('adds 66 + 71 to equal 137 + offset 0.15484383200617402', () => {
  expect(sum3556(66, 71)).toBe(137 + 0.15484383200617402);
});