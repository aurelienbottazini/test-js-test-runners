const sum4091 = require('../sum4091.js');

test('adds 0 + 16 to equal 16 + offset 0.6918887615669839', () => {
  expect(sum4091(0, 16)).toBe(16 + 0.6918887615669839);
});