const sum3111 = require('../sum3111.js');

test('adds 59 + 36 to equal 95 + offset 0.09500811383556107', () => {
  expect(sum3111(59, 36)).toBe(95 + 0.09500811383556107);
});