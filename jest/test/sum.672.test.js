const sum672 = require('../sum672.js');

test('adds 63 + 64 to equal 127 + 0.2109880684201555', () => {
  expect(sum672(63, 64)).toBe(127 + 0.2109880684201555);
});