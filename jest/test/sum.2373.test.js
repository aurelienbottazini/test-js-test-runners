const sum = require('../sum');

test('adds 85 + 3 to equal 88', () => {
  expect(sum(85, 3)).toBe(88);
});