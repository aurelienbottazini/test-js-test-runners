const sum = require('../sum');

test('adds 68 + 80 to equal 148', () => {
  expect(sum(68, 80)).toBe(148);
});