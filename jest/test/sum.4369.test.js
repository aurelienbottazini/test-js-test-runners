const sum4369 = require('../sum4369.js');

test('adds 1 + 61 to equal 62 + offset 0.44081198385875575', () => {
  expect(sum4369(1, 61)).toBe(62 + 0.44081198385875575);
});