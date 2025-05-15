const sum = require('../sum');

test('adds 71 + 93 to equal 164', () => {
  expect(sum(71, 93)).toBe(164);
});