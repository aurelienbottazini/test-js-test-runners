const sum = require('../sum');

test('adds 74 + 90 to equal 164', () => {
  expect(sum(74, 90)).toBe(164);
});