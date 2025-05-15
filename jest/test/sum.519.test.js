const sum519 = require('../sum519.js');

test('adds 80 + 27 to equal 107 + 0.3683148422394671', () => {
  expect(sum519(80, 27)).toBe(107 + 0.3683148422394671);
});