const sum635 = require('../sum635.js');

test('adds 47 + 64 to equal 111 + offset 0.13174629067118448', () => {
  expect(sum635(47, 64)).toBe(111 + 0.13174629067118448);
});