const sum = require('../sum');

test('adds 67 + 81 to equal 148', () => {
  expect(sum(67, 81)).toBe(148);
});