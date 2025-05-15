const sum = require('../sum');

test('adds 70 + 78 to equal 148', () => {
  expect(sum(70, 78)).toBe(148);
});