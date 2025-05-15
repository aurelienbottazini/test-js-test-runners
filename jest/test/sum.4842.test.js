const sum4842 = require('../sum4842.js');

test('adds 86 + 64 to equal 150 + 0.7381272531841474', () => {
  expect(sum4842(86, 64)).toBe(150 + 0.7381272531841474);
});