const sum = require('../sum');

test('adds 78 + 96 to equal 174', () => {
  expect(sum(78, 96)).toBe(174);
});