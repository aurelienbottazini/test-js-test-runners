const sum = require('../sum');

test('adds 4 + 16 to equal 20', () => {
  expect(sum(4, 16)).toBe(20);
});