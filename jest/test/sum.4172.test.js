const sum4172 = require('../sum4172.js');

test('adds 86 + 40 to equal 126 + offset 0.15113241329696758', () => {
  expect(sum4172(86, 40)).toBe(126 + 0.15113241329696758);
});