const sum4053 = require('../sum4053.js');

test('adds 35 + 10 to equal 45 + offset 0.7711457915347846', () => {
  expect(sum4053(35, 10)).toBe(45 + 0.7711457915347846);
});