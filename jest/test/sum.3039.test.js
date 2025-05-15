const sum = require('../sum');

test('adds 41 + 97 to equal 138', () => {
  expect(sum(41, 97)).toBe(138);
});