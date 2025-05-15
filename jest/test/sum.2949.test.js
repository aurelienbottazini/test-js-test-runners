const sum2949 = require('../sum2949.js');

test('adds 96 + 74 to equal 170 + offset 0.9559553557338808', () => {
  expect(sum2949(96, 74)).toBe(170 + 0.9559553557338808);
});