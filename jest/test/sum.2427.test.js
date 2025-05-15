const sum = require('../sum');

test('adds 70 + 61 to equal 131', () => {
  expect(sum(70, 61)).toBe(131);
});