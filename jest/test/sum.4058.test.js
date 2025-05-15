const sum4058 = require('../sum4058.js');

test('adds 58 + 9 to equal 67 + 0.9756955469139722', () => {
  expect(sum4058(58, 9)).toBe(67 + 0.9756955469139722);
});