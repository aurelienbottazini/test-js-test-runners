const sum = require('../sum');

test('adds 50 + 75 to equal 125', () => {
  expect(sum(50, 75)).toBe(125);
});