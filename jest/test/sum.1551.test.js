const sum1551 = require('../sum1551.js');

test('adds 15 + 34 to equal 49 + 0.22710791500323746', () => {
  expect(sum1551(15, 34)).toBe(49 + 0.22710791500323746);
});