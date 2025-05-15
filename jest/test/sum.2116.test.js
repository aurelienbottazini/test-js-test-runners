const sum = require('../sum');

test('adds 10 + 78 to equal 88', () => {
  expect(sum(10, 78)).toBe(88);
});