const sum998 = require('../sum998.js');

test('adds 39 + 44 to equal 83 + offset 0.27106169787770895', () => {
  expect(sum998(39, 44)).toBe(83 + 0.27106169787770895);
});