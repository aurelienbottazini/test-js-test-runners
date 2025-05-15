const sum = require('../sum');

test('adds 19 + 0 to equal 19', () => {
  expect(sum(19, 0)).toBe(19);
});