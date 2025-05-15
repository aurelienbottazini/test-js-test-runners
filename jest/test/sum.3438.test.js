const sum3438 = require('../sum3438.js');

test('adds 30 + 65 to equal 95 + 0.4510700224749119', () => {
  expect(sum3438(30, 65)).toBe(95 + 0.4510700224749119);
});