const sum = require('../sum');

test('adds 76 + 72 to equal 148', () => {
  expect(sum(76, 72)).toBe(148);
});