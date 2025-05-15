const sum = require('../sum');

test('adds 96 + 35 to equal 131', () => {
  expect(sum(96, 35)).toBe(131);
});