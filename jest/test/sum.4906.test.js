const sum = require('../sum');

test('adds 89 + 97 to equal 186', () => {
  expect(sum(89, 97)).toBe(186);
});