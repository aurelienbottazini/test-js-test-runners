const sum = require('../sum');

test('adds 89 + 65 to equal 154', () => {
  expect(sum(89, 65)).toBe(154);
});