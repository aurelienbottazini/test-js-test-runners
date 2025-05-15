const sum = require('../sum');

test('adds 62 + 86 to equal 148', () => {
  expect(sum(62, 86)).toBe(148);
});