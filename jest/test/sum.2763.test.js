const sum2763 = require('../sum2763.js');

test('adds 25 + 36 to equal 61 + 0.3985032412880488', () => {
  expect(sum2763(25, 36)).toBe(61 + 0.3985032412880488);
});