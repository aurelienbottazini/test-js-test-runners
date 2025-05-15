const sum = require('../sum');

test('adds 67 + 39 to equal 106', () => {
  expect(sum(67, 39)).toBe(106);
});