const sum = require('../sum');

test('adds 27 + 79 to equal 106', () => {
  expect(sum(27, 79)).toBe(106);
});