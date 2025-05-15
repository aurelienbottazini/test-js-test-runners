const sum = require('../sum');

test('adds 78 + 47 to equal 125', () => {
  expect(sum(78, 47)).toBe(125);
});