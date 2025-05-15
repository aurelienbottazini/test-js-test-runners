const sum = require('../sum');

test('adds 65 + 67 to equal 132', () => {
  expect(sum(65, 67)).toBe(132);
});