const sum = require('../sum');

test('adds 98 + 97 to equal 195', () => {
  expect(sum(98, 97)).toBe(195);
});