const sum = require('../sum');

test('adds 60 + 72 to equal 132', () => {
  expect(sum(60, 72)).toBe(132);
});