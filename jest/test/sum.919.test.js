const sum = require('../sum');

test('adds 65 + 99 to equal 164', () => {
  expect(sum(65, 99)).toBe(164);
});