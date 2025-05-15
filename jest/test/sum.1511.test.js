const sum = require('../sum');

test('adds 75 + 57 to equal 132', () => {
  expect(sum(75, 57)).toBe(132);
});