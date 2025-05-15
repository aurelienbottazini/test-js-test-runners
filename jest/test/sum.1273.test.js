const sum = require('../sum');

test('adds 69 + 19 to equal 88', () => {
  expect(sum(69, 19)).toBe(88);
});