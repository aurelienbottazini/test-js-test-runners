const sum3229 = require('../sum3229.js');

test('adds 50 + 31 to equal 81 + 0.9256978320161897', () => {
  expect(sum3229(50, 31)).toBe(81 + 0.9256978320161897);
});