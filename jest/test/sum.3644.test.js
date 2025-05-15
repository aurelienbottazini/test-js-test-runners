const sum3644 = require('../sum3644.js');

test('adds 15 + 36 to equal 51 + offset 0.22507897055962656', () => {
  expect(sum3644(15, 36)).toBe(51 + 0.22507897055962656);
});