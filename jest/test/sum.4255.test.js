const sum4255 = require('../sum4255.js');

test('adds 84 + 76 to equal 160 + 0.43782966109151056', () => {
  expect(sum4255(84, 76)).toBe(160 + 0.43782966109151056);
});