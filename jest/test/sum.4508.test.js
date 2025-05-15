const sum = require('../sum');

test('adds 7 + 97 to equal 104', () => {
  expect(sum(7, 97)).toBe(104);
});