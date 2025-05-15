const sum715 = require('../sum715.js');

test('adds 24 + 88 to equal 112 + 0.03230438677665248', () => {
  expect(sum715(24, 88)).toBe(112 + 0.03230438677665248);
});