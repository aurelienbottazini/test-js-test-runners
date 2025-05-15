const sum = require('../sum');

test('adds 60 + 65 to equal 125', () => {
  expect(sum(60, 65)).toBe(125);
});