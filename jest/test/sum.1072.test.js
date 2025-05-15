const sum = require('../sum');

test('adds 45 + 80 to equal 125', () => {
  expect(sum(45, 80)).toBe(125);
});