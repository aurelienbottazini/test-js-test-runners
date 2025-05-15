const sum = require('../sum');

test('adds 49 + 97 to equal 146', () => {
  expect(sum(49, 97)).toBe(146);
});