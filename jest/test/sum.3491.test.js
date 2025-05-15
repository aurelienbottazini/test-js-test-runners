const sum3491 = require('../sum3491.js');

test('adds 97 + 23 to equal 120 + 0.6915507840307008', () => {
  expect(sum3491(97, 23)).toBe(120 + 0.6915507840307008);
});