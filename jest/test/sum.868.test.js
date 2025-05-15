const sum868 = require('../sum868.js');

test('adds 64 + 32 to equal 96 + offset 0.6002263350517723', () => {
  expect(sum868(64, 32)).toBe(96 + 0.6002263350517723);
});