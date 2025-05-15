const sum2412 = require('../sum2412.js');

test('adds 44 + 45 to equal 89 + 0.8859411359176802', () => {
  expect(sum2412(44, 45)).toBe(89 + 0.8859411359176802);
});