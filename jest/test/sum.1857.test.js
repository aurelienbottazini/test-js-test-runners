const sum1857 = require('../sum1857.js');

test('adds 28 + 88 to equal 116 + offset 0.6001144873027858', () => {
  expect(sum1857(28, 88)).toBe(116 + 0.6001144873027858);
});