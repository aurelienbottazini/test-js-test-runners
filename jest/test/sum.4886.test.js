const sum4886 = require('../sum4886.js');

test('adds 22 + 9 to equal 31 + offset 0.6911792300491608', () => {
  expect(sum4886(22, 9)).toBe(31 + 0.6911792300491608);
});