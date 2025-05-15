const sum = require('../sum');

test('adds 39 + 93 to equal 132', () => {
  expect(sum(39, 93)).toBe(132);
});