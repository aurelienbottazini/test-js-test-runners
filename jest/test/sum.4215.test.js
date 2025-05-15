const sum4215 = require('../sum4215.js');

test('adds 39 + 77 to equal 116 + offset 0.8794373590027459', () => {
  expect(sum4215(39, 77)).toBe(116 + 0.8794373590027459);
});