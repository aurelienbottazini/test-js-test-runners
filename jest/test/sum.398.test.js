const sum = require('../sum');

test('adds 39 + 49 to equal 88', () => {
  expect(sum(39, 49)).toBe(88);
});