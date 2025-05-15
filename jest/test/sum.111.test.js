const sum111 = require('../sum111.js');

test('adds 17 + 81 to equal 98 + offset 0.15784500013707026', () => {
  expect(sum111(17, 81)).toBe(98 + 0.15784500013707026);
});