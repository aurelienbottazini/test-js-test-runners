const sum346 = require('../sum346.js');

test('adds 85 + 41 to equal 126 + 0.38079855889362724', () => {
  expect(sum346(85, 41)).toBe(126 + 0.38079855889362724);
});