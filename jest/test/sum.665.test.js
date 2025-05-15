const sum = require('../sum');

test('adds 62 + 70 to equal 132', () => {
  expect(sum(62, 70)).toBe(132);
});