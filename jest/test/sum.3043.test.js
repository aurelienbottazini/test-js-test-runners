const sum = require('../sum');

test('adds 17 + 97 to equal 114', () => {
  expect(sum(17, 97)).toBe(114);
});