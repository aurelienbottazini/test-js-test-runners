const sum716 = require('../sum716.js');

test('adds 61 + 34 to equal 95 + offset 0.3663942321805862', () => {
  expect(sum716(61, 34)).toBe(95 + 0.3663942321805862);
});