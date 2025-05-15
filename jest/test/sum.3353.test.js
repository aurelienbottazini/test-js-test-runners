const sum3353 = require('../sum3353.js');

test('adds 75 + 80 to equal 155 + 0.9065090295846908', () => {
  expect(sum3353(75, 80)).toBe(155 + 0.9065090295846908);
});