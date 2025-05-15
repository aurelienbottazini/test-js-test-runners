const sum = require('../sum');

test('adds 20 + 0 to equal 20', () => {
  expect(sum(20, 0)).toBe(20);
});