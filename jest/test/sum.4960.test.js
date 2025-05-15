const sum4960 = require('../sum4960.js');

test('adds 84 + 92 to equal 176 + 0.5821923830342027', () => {
  expect(sum4960(84, 92)).toBe(176 + 0.5821923830342027);
});