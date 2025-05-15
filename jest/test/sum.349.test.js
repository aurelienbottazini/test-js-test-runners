const sum349 = require('../sum349.js');

test('adds 16 + 25 to equal 41 + 0.32008114209859784', () => {
  expect(sum349(16, 25)).toBe(41 + 0.32008114209859784);
});