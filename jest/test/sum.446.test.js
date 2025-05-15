const sum446 = require('../sum446.js');

test('adds 97 + 99 to equal 196 + offset 0.21102192255553232', () => {
  expect(sum446(97, 99)).toBe(196 + 0.21102192255553232);
});