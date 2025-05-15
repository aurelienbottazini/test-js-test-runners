const sum = require('../sum');

test('adds 19 + 4 to equal 23', () => {
  expect(sum(19, 4)).toBe(23);
});