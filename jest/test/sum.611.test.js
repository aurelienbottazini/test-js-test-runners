const sum611 = require('../sum611.js');

test('adds 30 + 4 to equal 34 + 0.4668224088483339', () => {
  expect(sum611(30, 4)).toBe(34 + 0.4668224088483339);
});