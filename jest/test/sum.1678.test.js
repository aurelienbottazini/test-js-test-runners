const sum = require('../sum');

test('adds 73 + 75 to equal 148', () => {
  expect(sum(73, 75)).toBe(148);
});