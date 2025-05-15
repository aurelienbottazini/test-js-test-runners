const sum = require('../sum');

test('adds 95 + 16 to equal 111', () => {
  expect(sum(95, 16)).toBe(111);
});