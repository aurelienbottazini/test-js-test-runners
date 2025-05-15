const sum4283 = require('../sum4283.js');

test('adds 51 + 91 to equal 142 + offset 0.6601004318083047', () => {
  expect(sum4283(51, 91)).toBe(142 + 0.6601004318083047);
});