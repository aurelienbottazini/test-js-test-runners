const sum625 = require('../sum625.js');

test('adds 70 + 55 to equal 125 + 0.20803726435773306', () => {
  expect(sum625(70, 55)).toBe(125 + 0.20803726435773306);
});