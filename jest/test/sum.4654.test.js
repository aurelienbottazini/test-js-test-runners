const sum = require('../sum');

test('adds 80 + 68 to equal 148', () => {
  expect(sum(80, 68)).toBe(148);
});