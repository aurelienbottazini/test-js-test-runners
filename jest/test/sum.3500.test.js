const sum3500 = require('../sum3500.js');

test('adds 63 + 63 to equal 126 + 0.7971721649155095', () => {
  expect(sum3500(63, 63)).toBe(126 + 0.7971721649155095);
});