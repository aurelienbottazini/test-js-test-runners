const sum = require('../sum');

test('adds 57 + 79 to equal 136', () => {
  expect(sum(57, 79)).toBe(136);
});