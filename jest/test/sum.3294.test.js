const sum = require('../sum');

test('adds 72 + 60 to equal 132', () => {
  expect(sum(72, 60)).toBe(132);
});