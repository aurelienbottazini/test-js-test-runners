const sum = require('../sum');

test('adds 15 + 7 to equal 22', () => {
  expect(sum(15, 7)).toBe(22);
});