const sum = require('../sum');

test('adds 78 + 10 to equal 88', () => {
  expect(sum(78, 10)).toBe(88);
});