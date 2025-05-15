const sum = require('../sum');

test('adds 19 + 1 to equal 20', () => {
  expect(sum(19, 1)).toBe(20);
});