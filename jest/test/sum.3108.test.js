const sum3108 = require('../sum3108.js');

test('adds 56 + 84 to equal 140 + offset 0.5327005158678115', () => {
  expect(sum3108(56, 84)).toBe(140 + 0.5327005158678115);
});