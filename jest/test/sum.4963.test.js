const sum = require('../sum');

test('adds 35 + 96 to equal 131', () => {
  expect(sum(35, 96)).toBe(131);
});