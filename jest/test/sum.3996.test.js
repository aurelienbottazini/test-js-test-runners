const sum = require('../sum');

test('adds 84 + 98 to equal 182', () => {
  expect(sum(84, 98)).toBe(182);
});