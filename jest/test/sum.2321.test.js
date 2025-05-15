const sum = require('../sum');

test('adds 66 + 98 to equal 164', () => {
  expect(sum(66, 98)).toBe(164);
});