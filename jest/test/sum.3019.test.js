const sum = require('../sum');

test('adds 88 + 0 to equal 88', () => {
  expect(sum(88, 0)).toBe(88);
});