const sum3774 = require('../sum3774.js');

test('adds 75 + 66 to equal 141 + offset 0.4220582267343701', () => {
  expect(sum3774(75, 66)).toBe(141 + 0.4220582267343701);
});