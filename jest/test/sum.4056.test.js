const sum = require('../sum');

test('adds 57 + 97 to equal 154', () => {
  expect(sum(57, 97)).toBe(154);
});