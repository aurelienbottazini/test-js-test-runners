const sum4924 = require('../sum4924.js');

test('adds 59 + 58 to equal 117 + offset 0.3300134358765918', () => {
  expect(sum4924(59, 58)).toBe(117 + 0.3300134358765918);
});