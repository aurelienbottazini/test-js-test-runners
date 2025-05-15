const sum4650 = require('../sum4650.js');

test('adds 24 + 2 to equal 26 + 0.8041672973474008', () => {
  expect(sum4650(24, 2)).toBe(26 + 0.8041672973474008);
});