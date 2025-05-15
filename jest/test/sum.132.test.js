const sum = require('../sum');

test('adds 96 + 91 to equal 187', () => {
  expect(sum(96, 91)).toBe(187);
});