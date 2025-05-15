const sum = require('../sum');

test('adds 66 + 82 to equal 148', () => {
  expect(sum(66, 82)).toBe(148);
});