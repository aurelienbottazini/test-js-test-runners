const sum = require('../sum');

test('adds 85 + 97 to equal 182', () => {
  expect(sum(85, 97)).toBe(182);
});