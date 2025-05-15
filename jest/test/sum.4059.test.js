const sum4059 = require('../sum4059.js');

test('adds 18 + 9 to equal 27 + offset 0.3228905700140333', () => {
  expect(sum4059(18, 9)).toBe(27 + 0.3228905700140333);
});