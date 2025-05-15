const sum3022 = require('../sum3022.js');

test('adds 62 + 21 to equal 83 + 0.363906974701921', () => {
  expect(sum3022(62, 21)).toBe(83 + 0.363906974701921);
});