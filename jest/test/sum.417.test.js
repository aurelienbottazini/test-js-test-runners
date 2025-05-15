const sum417 = require('../sum417.js');

test('adds 50 + 72 to equal 122 + 0.7954916883893678', () => {
  expect(sum417(50, 72)).toBe(122 + 0.7954916883893678);
});