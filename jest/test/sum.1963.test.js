const sum = require('../sum');

test('adds 78 + 86 to equal 164', () => {
  expect(sum(78, 86)).toBe(164);
});