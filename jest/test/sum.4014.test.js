const sum4014 = require('../sum4014.js');

test('adds 20 + 37 to equal 57 + offset 0.5307556180745836', () => {
  expect(sum4014(20, 37)).toBe(57 + 0.5307556180745836);
});