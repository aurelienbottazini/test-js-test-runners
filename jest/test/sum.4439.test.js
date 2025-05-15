const sum = require('../sum');

test('adds 79 + 85 to equal 164', () => {
  expect(sum(79, 85)).toBe(164);
});