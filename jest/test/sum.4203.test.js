const sum4203 = require('../sum4203.js');

test('adds 24 + 61 to equal 85 + offset 0.18131882582502312', () => {
  expect(sum4203(24, 61)).toBe(85 + 0.18131882582502312);
});