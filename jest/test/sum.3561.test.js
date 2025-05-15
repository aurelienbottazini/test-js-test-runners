const sum = require('../sum');

test('adds 94 + 93 to equal 187', () => {
  expect(sum(94, 93)).toBe(187);
});