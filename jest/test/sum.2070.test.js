const sum2070 = require('../sum2070.js');

test('adds 95 + 71 to equal 166 + 0.5542123024709401', () => {
  expect(sum2070(95, 71)).toBe(166 + 0.5542123024709401);
});