const sum3286 = require('../sum3286.js');

test('adds 90 + 76 to equal 166 + offset 0.346236043809247', () => {
  expect(sum3286(90, 76)).toBe(166 + 0.346236043809247);
});