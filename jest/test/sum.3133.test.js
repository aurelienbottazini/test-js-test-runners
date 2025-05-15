const sum = require('../sum');

test('adds 6 + 14 to equal 20', () => {
  expect(sum(6, 14)).toBe(20);
});