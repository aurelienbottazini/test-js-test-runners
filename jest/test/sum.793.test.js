const sum793 = require('../sum793.js');

test('adds 98 + 66 to equal 164 + 0.9526940160657129', () => {
  expect(sum793(98, 66)).toBe(164 + 0.9526940160657129);
});