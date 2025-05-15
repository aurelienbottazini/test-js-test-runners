const sum = require('../sum');

test('adds 90 + 97 to equal 187', () => {
  expect(sum(90, 97)).toBe(187);
});