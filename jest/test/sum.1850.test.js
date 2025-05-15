const sum = require('../sum');

test('adds 78 + 97 to equal 175', () => {
  expect(sum(78, 97)).toBe(175);
});