const sum = require('../sum');

test('adds 81 + 97 to equal 178', () => {
  expect(sum(81, 97)).toBe(178);
});