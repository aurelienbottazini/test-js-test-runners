const sum = require('../sum');

test('adds 83 + 81 to equal 164', () => {
  expect(sum(83, 81)).toBe(164);
});