const sum1841 = require('../sum1841.js');

test('adds 7 + 32 to equal 39 + 0.7406731833505648', () => {
  expect(sum1841(7, 32)).toBe(39 + 0.7406731833505648);
});