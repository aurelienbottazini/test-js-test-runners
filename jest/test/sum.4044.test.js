const sum4044 = require('../sum4044.js');

test('adds 35 + 34 to equal 69 + 0.3631420581470032', () => {
  expect(sum4044(35, 34)).toBe(69 + 0.3631420581470032);
});