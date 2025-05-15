const sum3708 = require('../sum3708.js');

test('adds 96 + 40 to equal 136 + 0.3167832798792164', () => {
  expect(sum3708(96, 40)).toBe(136 + 0.3167832798792164);
});